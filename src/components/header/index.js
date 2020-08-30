import React, { Component } from 'react'
import './style.scss';
import CartIcon from '../carticon/index';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/utils';
//redux
import { connect } from 'react-redux';
import SlideMenu from '../slide-menu';
import Burger from '../burger-menu/index';





class Header extends Component {


    render() {

        const { currentUser } = this.props;



        return (
            <div className="header">


                <header>
                    <div className="brand">

                        <Burger />

                        <Link to="/"> ken_interiors</Link>
                    </div>


                    <nav>
                        <ul>

                            <li className='nav-item'> <Link to='/'>About</Link></li>
                            <li className='nav-item'> <Link to='/contact-us'>Contact</Link></li>


                            {currentUser ? (
                                <li className='nav-item'>
                                    <button onClick={() => auth.signOut()} className='signOut-btn'>
                                        Sign Out
                                         </button>
                                </li>
                            ) : (
                                    <li className='nav-item'>
                                        <Link to='/login'>Sign In</Link>
                                    </li>
                                )}
                            <li>   <CartIcon /></li>
                        </ul>
                    </nav>



                </header>

                <SlideMenu />
            </div>
        )
    }
}


const mapStateToProps = ({ user }) => ({

    currentUser: user.currentUser

})

export default connect(mapStateToProps, null)(Header);