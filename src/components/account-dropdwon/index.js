import React from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';


const AccountDropdown = ({ history, hidden }) => {

    return (



        <div className="dropdown">
            <button className="login-btn" onClick={() => history.push('/login')}>  LOGIN</button>
            <p>OR</p>
            <button className="signup-btn" onClick={() => history.push('/signup')}> REGISTER</button>
        </div>





    )
}


export default withRouter(AccountDropdown);