import React from 'react'
import './style.scss';
import CartIcon from '../carticon/index';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">

            <div className="logo">

                <h1> koig_interiors</h1>
            </div>

            <div className="navLinks">

                <ul>

                    <Link to='/'> Home</Link>
                    <Link to='/'>shop</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>

                </ul>
            </div>

            <div className="users">
                <span>
                    <i className="fi-xtluxl-user-thin"></i>
                 LOGIN/SIGNUP
                </span>

                <CartIcon />

            </div>





        </div>
    )
}

export default Header;