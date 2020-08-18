import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeMenu } from '../../Redux/hamburger/burgerActions'

const SlideMenu = ({ ham, closeMenu }) => {


    return (
        <div className="slide-menu" style={{
            transform: ham.transform,
            transition: ham.transition
        }}>
            <div>
                <button className="close-btn" onClick={() => closeMenu()}> X </button>
                <ul>
                    <li className="slide-item">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="slide-item">
                        <Link to="/"> shop</Link>
                    </li>
                    <li className="slide-item">


                        <Link to="/"> Contact </Link>


                    </li>

                    <hr></hr>
                    <li className="slide-item">

                        <Link to="/"> LOGIN</Link>

                    </li>
                    <li className="slide-item">

                        <Link to="/"> SIGN UP </Link>

                    </li>

                </ul>


            </div>

        </div >

    )
}

const mapStateToProps = ({ hamMenu }) => ({
    ham: hamMenu.styles
});
const mapDispatchToProps = {
    closeMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideMenu);