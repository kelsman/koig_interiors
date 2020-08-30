import React, { Component } from 'react';
import './style.scss';
import { createContactProfile } from '../../firebase/utils.js'
class Contact extends Component {


    state = {
        email: '',
        name: '',
        phone: '',
        details: '',
        subject: ''

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await createContactProfile(this.state);
        alert('submitted succesfully, we will get back to you.')

    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {

        return (
            <div className="contact-wrapper">
                <div className="contact-intro">
                    <h1>Need help?</h1>
                    <p>Send us your request using the online form below and we will get back to you within 24 - 48 business hours. </p>

                </div>

                <div className="contact-form">

                    <form onSubmit={this.handleSubmit}>

                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                        <input
                            type="text"
                            placeholder="Enter your Mobile number(e.9, +234675233)"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />

                        <label htmlFor="subject"> subject</label>
                        <select
                            name="subject"
                            id="subject"
                            value={this.state.subject}
                            onChange={this.handleChange}


                        >
                            <option value=""> choose an option  </option>
                            <option value="cancel order"> cancel order</option>
                            <option value="confirm order"> i want to confirm my order</option>
                            <option value="payment issue"> payment issue</option>


                        </select>
                        <textarea
                            name="details"
                            cols="30" rows="10"
                            placeholder="give full details here"
                            value={this.state.details}
                            onChange={this.handleChange}>
                        </textarea>
                        <button> submit</button>

                    </form>

                    <div className="address">
                        <h4> You can also contact us at </h4>
                        <address>
                            <h6>address</h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro cupiditate velit.

                    </address>
                        <p> phone <br></br> Lorem ipsum dolor sit amet.</p>
                        <h6>email</h6>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>


                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;