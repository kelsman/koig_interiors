import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { openMenu } from '../../Redux/hamburger/burgerActions'

const Burger = ({ openMenu }) => {


    return (
        <div>
            <div className="hamburger" onClick={() => openMenu()}>
                <div className="ham" />
                <div className="ham" />
                <div className="ham" />
            </div>

        </div>
    )
};

const mapDispatchToProps = {
    openMenu
};


export default connect(null, mapDispatchToProps)(Burger);