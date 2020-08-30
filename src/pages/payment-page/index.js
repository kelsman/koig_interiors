import React from 'react';
import { connect } from 'react-redux';
import PaymentForm from '../../components/payment-form/index';
import { Link } from 'react-router-dom';
import './style.scss';
const PaymentPage = ({ currentUser }) => {

    return (
        <div className="payment-page">
            {
                currentUser ? <PaymentForm /> : <h4> you have to be <Link to="/login">logged in</Link> to pay</h4>
            }

        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(PaymentPage);