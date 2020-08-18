import React, { Component } from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import png from "../../assets/Mobile-login-pana.png";
import { auth, createUserProfile } from '../../firebase/utils';

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorAlert: ''
    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, confirmPassword, username } = this.state;
        if (password !== confirmPassword) {
            this.setState({ errorAlert: "password do not match" });

        } else {
            this.setState({ errorAlert: '' })
            try {
                const user = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfile(user, { username });


            } catch (error) {
                alert(error.message);
            }
        }
        this.setState({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""

        })
    };
    render() {
        return (
            <div className="signup-container">
                <div className="wrapper">
                    <h2>Sign up</h2>

                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            placeholder="confirmPassword"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                        />
                        <small style={{
                            color: "red",
                            display: "block",
                            float: "right"
                        }}>{this.state.errorAlert}</small>

                        <button className="signup-btn"> SIGN UP</button>
                        <p>
                            {" "}
              Already have an account?
              <Link to="/login" style={{ color: "orange" }}>
                                {" "}
                sign in{" "}
                            </Link>
                        </p>
                    </form>


                </div>


                <div className="hero">
                    <img src={png} alt="" />
                </div>
            </div>
        );
    }
}

export default SignUp;
