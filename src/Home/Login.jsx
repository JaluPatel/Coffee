// src/Login.js
import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Welcome</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input  type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input  type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button className='submit' type="submit">Login</button>
                <span className="register-link1">
                    Don't have an account? <a href="#">Register</a>
                </span>
            </form>
        </div>
    );
};

export default Login;
