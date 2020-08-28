import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


class Footer extends Component {
    render() {
        return (

            <footer>

                <div className="social">

                    <ul>

                        <li>
                            <a href='https://twitter.com/KOigiangbe'>
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/kelwaffi">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kels_man/">
                                <i className="fab fa-instagram"></i>

                            </a>
                        </li>


                    </ul>

                </div>
                <div className="others">

                    <ul className="about">
                        <h4> About Koig_interior</h4>
                        <li>
                            <Link to='/contact-us'> Contact us </Link>
                        </li>
                        <li> <Link to='/about-us'> About us</Link></li>
                        <li> <Link to='/'> Terms and conditions</Link></li>

                    </ul>

                    <ul className="payment">
                        <h4> payment</h4>
                        <li> mastercard </li>
                        <li> verve</li>
                        <li> paystack </li>

                    </ul>

                </div>

                <div className="bottom-footer">
                    <p

                    >  copyright &copy; 2020 kens_interior.com. All right reserved</p>
                </div>

            </footer>
        )
    }
}

export default Footer;


