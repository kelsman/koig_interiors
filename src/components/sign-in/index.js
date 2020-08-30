import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import png from '../../assets/Mobile-login-pana.png'
import google from '../../assets/hero/g.png';
import { auth, signInWithGoogle } from '../../firebase/utils';

class LogIn extends React.Component {

    state = {
        email: '',
        password: ''
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            alert(error.message);
        }

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
                            required

                        />
                        <input type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        <small>

                            <Link className="password-reset" to='/password-reset'> Forget Password?</Link>
                        </small>
                        <button className="signin-btn"> SIGN IN</button>
                        <button
                            type="button"
                            className="google"
                            onClick={signInWithGoogle}
                        >
                            <img src={google} alt="" />
                            sign in with Google
                         </button>




                    </form>
                    <p> Dont't have an account?<Link to="/signup" style={{ color: "orange" }}> sign up </Link></p>


                </div>
                <div className="sign-png">
                    <img src={png} alt="" />
                </div>



            </div>
        )
    }
}

export default LogIn;