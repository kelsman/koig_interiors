import React, { useState } from 'react';
import { PaystackButton } from "react-paystack"
import { connect } from 'react-redux';

import './style.scss';
const PaymentForm = ({ CartTotalPrice, cartItems }) => {

    const publicKey = process.env.REACT_APP_PAYSTACK_KEY;
    const amount = CartTotalPrice * 100 * 450  //set in kobo//
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),

        //onClose: () => alert("Wait! Don't leave :("),
    }

    return (
        <div className="payment-form">

            <div className="item-container">

                <div className="item-wrapper">
                    {
                        cartItems.map(({ imageUrl, price, name, id }) => {
                            return (
                                <div className="item" key={id}>
                                    <img src={imageUrl} alt="" />
                                    <p style={{ whiteSpace: "wrap" }}> {name}</p>
                                    <small> {price} </small>
                                </div>
                            )
                        })
                    }

                    <div className="total">
                        <p> Total: ${CartTotalPrice} </p>
                        <small> Sub Total: &#x20A6;{amount}(at the rate of $450) </small>
                    </div>

                </div>
            </div>

            <div className="checkout-form">
                <div className="checkout-field">

                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                </div>
                <div className="checkout-field">

                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="checkout-field">

                    <input
                        type="text"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="phone"
                    />
                </div>
                <PaystackButton className="paystack-button" {...componentProps} />
            </div>

        </div>
    )

}

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems,
    CartTotalPrice: cart.cartItems.reduce((acc, arr) => {
        return acc + arr.quantity * Number((arr.price).substring(1))
    }, 0)
})

export default connect(mapStateToProps, null)(PaymentForm);