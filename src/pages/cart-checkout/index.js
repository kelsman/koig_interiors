import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item';


const CartCheckoutPage = ({ totalPrice }) => {

    return (

        <div className='checkout-page'>


            <CheckoutItem />



            <div className='total'>SUBTOTAL: ${totalPrice} </div>
        </div>
    )
};
const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems,
    totalPrice: cart.cartItems.reduce((acc, arr) => {
        return acc + arr.quantity * Number((arr.price).substring(1))
    }, 0)

});

export default connect(mapStateToProps, null)(CartCheckoutPage)