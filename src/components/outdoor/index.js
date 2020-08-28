import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { addToCart } from '../../Redux/cart/cartActions';
import { outdoorData } from './data';
import { connect } from 'react-redux';
const Outdoor = ({ addToCart }) => {
    return (
        <div className="outdoor">

            <div >
                <div className="intro">
                    <p> <Link to="/"> Home</Link> &nbsp; <span></span></p>

           &nbsp; <p style={{ opacity: "0.6" }}> Outdoor </p>
                </div>

                <div>
                    <h3> Outdoor </h3>
                </div>
            </div>
            <div className="list-wrapper">
                {outdoorData.map((item) => {
                    const { name, imageUrl, price, id } = item;
                    return (

                        <div className="outdoor-parent" key={id}>

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
export default connect(null, mapDispatchToProps)(Outdoor);