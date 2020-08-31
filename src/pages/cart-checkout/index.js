import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item';
import { withRouter } from 'react-router-dom'


const CartCheckoutPage = ({ totalPrice, history }) => {

    return (

        <div className='checkout-page'>


            <CheckoutItem />


            <div className='total'>SUBTOTAL: ${totalPrice} </div>
            <div className="payment-link">
                <button onClick={() => history.push('/payment')}>
                    Goto checkout
             </button>
            </div>
        </div>
    )
};
const mapStateToProps = ({ cart, user }) => ({
    cartItems: cart.cartItems,
    totalPrice: cart.cartItems.reduce((acc, arr) => {
        return acc + arr.quantity * Number((arr.price).substring(1))
    }, 0),

    currentUser: user.currentUser
});




export default connect(mapStateToProps, null)(withRouter(CartCheckoutPage))