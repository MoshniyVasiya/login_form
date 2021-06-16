import React from 'react';
import './Main.scss';
import ThirdPartyServicesAuth from './ThirdPartyServicesAuth/ThirdPartyServicesAuth';
import AuthForm from './AuthForm/AuthForm';



const Main = () => {
    return (
        <div className="login-form">
            <div className="login-form__title">
                <h2>Log in</h2>
                <span>Don't have an account? <a href="/">Sign up</a></span>
            </div>
            <ThirdPartyServicesAuth />
            <span className="login-form__separator">or</span>
            <AuthForm />
        </div>
    )
}

export default Main;
