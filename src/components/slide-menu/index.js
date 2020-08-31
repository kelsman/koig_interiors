import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeMenu } from '../../Redux/hamburger/burgerActions'
import { auth } from '../../firebase/utils';

class SlideMenu extends Component {


    handleSignOut = async () => {
        const { closeMenu } = this.props;
        await auth.signOut();
        alert('sign out succesful');
        closeMenu();
    }
    render() {
        const { ham, closeMenu, currentUser } = this.props;

        return (
            <div className="slide-menu"
                style={{
                    transform: ham.transform,
                    transition: ham.transition,
                    color: "white"
                }}
            >
                <div>
                    <button className="close-btn" onClick={() => closeMenu()}> X </button>
                    <ul>
                        <li className="slide-item">
                            <Link to="/" onClick={() => closeMenu()}> Home</Link>
                        </li>
                        <li className="slide-item">
                            <Link to="/" onClick={() => closeMenu()} >About us </Link>
                        </li>
                        <li className="slide-item">


                            <Link to="/contact-us" onClick={() => closeMenu()}> Contact us </Link>


                        </li>

                        <hr></hr>
                        <div className="user-section">
                            {currentUser ? (
                                <li className='slide-item'>
                                    <button onClick={this.handleSignOut} className='signOut-btn'>
                                        Sign Out
                                     </button>
                                </li>
                            ) : (

                                    <li className='slide-item'>
                                        <Link to='/login' className="signin-btn" onClick={() => closeMenu()}>Sign In</Link>
                                    </li>


                                )}

                        </div>



                    </ul>


                </div>

            </div >

        )
    }
}

const mapStateToProps = ({ hamMenu, user }) => ({
    ham: hamMenu.styles,
    currentUser: user.currentUser

});
const mapDispatchToProps = {
    closeMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideMenu);