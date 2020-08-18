import React from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/utils';
const AccountDropdown = ({ history, currentUser }) => {

    return (

        !currentUser ?

            <div className="dropdown">
                <button className="login-btn" onClick={() => history.push('/login')}>  LOGIN</button>
                <p>OR</p>
                <button className="signup-btn" onClick={() => history.push('/signup')}> REGISTER</button>
            </div>

            :
            <div className="dropdown">
                <button className="login-btn" onClick={() => auth.signOut()}>  LOGOUT</button>
            </div>
    )
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});


export default connect(mapStateToProps, null)(withRouter(AccountDropdown));


