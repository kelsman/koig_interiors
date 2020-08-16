import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import png from '../../assets/Mobile-login-pana.png'
import google from '../../assets/hero/g.png';

class LogIn extends React.Component {

    state = {
        email: '',
        password: ''
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="login">
                <div className="form-wrapper">
                    <h2>Welcome Back !<br></br>
                    Please Sign in now
                    </h2>

                    <form className="form" onSubmit={this.handleSubmit} >
                        <input type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}

                        />
                        <input type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <small>

                            <Link className="password-reset" to='/'> Forget Password?</Link>
                        </small>
                        <button className="signin-btn"> SIGN IN</button>
                        <button className="google">
                            <img src={google} alt="" />
                            sign in with Google
                         </button>




                    </form>
                    <p> Dont't have an account?<Link to="/signup" style={{ color: "orange" }}> sign up </Link></p>


                </div>
                <div className="signup-msg">
                    <img src={png} alt="" />
                </div>



            </div>
        )
    }
}

export default LogIn;