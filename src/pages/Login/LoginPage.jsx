import React from 'react';
import './styles.css';
import LoginForm from './LoginForm';

const LoginPage = () => {
    return (
        <div className="page bg-login login-page bg-mask bg-cover bg-center bg-no-repeat bg-blend-darken flex items-center justify-center">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
