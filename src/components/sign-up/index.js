import React, { Component } from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import png from "../../assets/Mobile-login-pana.png";

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
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

                        <button className="signup-btn"> SIGN UP</button>
                        <p>
                            {" "}
              Already have an account?
              <Link to="/sigin" style={{ color: "orange" }}>
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
