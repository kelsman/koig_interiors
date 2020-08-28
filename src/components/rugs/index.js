import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/cart/cartActions'
import { rugData } from './data';

const Rugs = ({ addToCart }) => {

    return (
        <div className="rug">

            <div >
                <div className="intro">
                    <p> <Link to="/"> Home</Link> &nbsp; <span></span></p>

       &nbsp; <p style={{ opacity: "0.6" }}> Rug </p>
                </div>

                <div>
                    <h3> Rugs </h3>
                </div>
            </div>
            <div className="list-wrapper">
                {rugData.map((item) => {
                    const { name, imageUrl, price, id } = item;
                    return (

                        <div className="rug-parent" key={id}>

                            <img className="image" src={imageUrl} alt="" />
                            <h5 className="name"> {name}</h5>
                            <p className="price" style={{ color: 'red' }}> {price}</p>
                            <button className="add-btn" onClick={() => addToCart(item)}> Add to cart </button>

                        </div>



                    )
                })}
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    addToCart
}
export default connect(null, mapDispatchToProps)(Rugs);