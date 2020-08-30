import React from 'react';
import './style.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const CartIcon = ({ history, cartQuantity }) => {
    return (
        <div>
            <div className="cart-icon" onClick={() => history.push('/checkout-page')}>

                <ShoppingBag className='shopping-icon' />

                <span className='item-count'> {cartQuantity} </span>

            </div>



        </div>
    )
}

const mapStateToProps = ({ cart }) => ({
    cartQuantity: cart.cartItems.reduce((acc, arr) => acc + arr.quantity, 0)

});

export default connect(mapStateToProps, null)(withRouter(CartIcon));