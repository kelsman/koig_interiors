import React from 'react';
import { connect } from 'react-redux';
import PaymentForm from '../../components/payment-form/index';
import './style.scss';
const PaymentPage = () => {

    return (
        <div className="payment-page">

            <PaymentForm />
        </div>
    )
}

export default connect()(PaymentPage);