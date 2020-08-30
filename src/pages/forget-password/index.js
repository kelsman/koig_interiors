import React, { Component } from 'react';
import { auth } from '../../firebase/utils';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';
class ForgetPassword extends Component {


    state = {
        email: ""
    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email } = this.state;
        const { history } = this.props;
        try {
            await auth.sendPasswordResetEmail(email);
            await alert('Email sent');
            history.push('/login')

        } catch (error) {
            console.log(error.message);
        }
    }

    render() {

        return (
            <div className="content-wrapper">
                <div>
                    <h5>Password Assitance</h5>
                    <p>please enter the email-address you used in registering your acoount
                    We will send you a link to this e-mail address to reset your password.
                      </p>

                </div>
                <form onSubmit={this.handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />

                    <button className='reset-btn'> RESET PASSWORD </button>
                    <Link to='/login'> &lt;&lt;Return to Login </Link>

                </form>


            </div>
        )
    }
}

export default withRouter(ForgetPassword);