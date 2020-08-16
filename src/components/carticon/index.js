import React from 'react';
import './style.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    return (
        <div>
            <div className="cart-icon">

                <ShoppingBag className='shopping-icon' />
                <span className='item-count'> 0 </span>

            </div>



        </div>
    )
}

export default CartIcon;