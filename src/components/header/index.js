import React from 'react'
import './style.scss';
import CartIcon from '../carticon/index';
import { Link } from 'react-router-dom';
import AccountDropdown from '../account-dropdwon';
//redux
import { connect } from 'react-redux';
import { toggle } from '../../Redux/user/userActions';


const Header = ({ toggle, hidden }) => {
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
                <span style={{ cursor: "pointer" }} onClick={() => toggle()}>
                    <i className="fi-xtluxl-user-thin"></i>
                    account
                </span>

                <CartIcon />

            </div>

            {hidden ? null : <AccountDropdown />}



        </div>
    )
}

const mapDispatchToProps = {
    toggle
};
const mapStateToProps = ({ user }) => ({
    hidden: user.hidden
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);