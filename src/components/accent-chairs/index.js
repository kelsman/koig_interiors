import React from 'react'
import './style.scss';
import { accentChairs } from './data'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/cart/cartActions';
const AccentChairs = ({ addToCart }) => {

    return (
        <div className="chair-wrapper">

            <div >
                <div className="intro">
                    <p> <Link to="/"> Home</Link> &nbsp; <span></span></p>&nbsp;

                    <p style={{ opacity: "0.6" }}> Chairs </p>
                </div>

                <div>
                    <h3> Accent Chairs </h3>
                </div>
            </div>
            <div className="list-wrapper">
                {accentChairs.map((item) => {
                    const { name, imageUrl, price, id } = item;
                    return (

                        <div className="chair-parent" key={id}>

                            <img className="image" src={imageUrl} alt="" />
                            <h5 className="name"> {name}</h5>
                            <p className="price"> {price}</p>
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

export default connect(null, mapDispatchToProps)(AccentChairs);