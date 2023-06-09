
import React from 'react';


const LoginPage = () => {
    return (
        <div className="container">
            <form className="form form--hidden" id="login">
                <h1 className="form__title">Login</h1>
                <div className="form__message form__message--error"></div>
                <div className="form__input-group">
                    <input type="text" id="signupUserName" className="form__input" autoFocus placeholder="Username or email" />
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input type="password" className="form__input" autoFocus placeholder="Password" />
                    <div className="form__input-error-message"></div>
                </div>
                <button className="form__button" type="submit">Continue</button>
                <p className="form__text">
                    <a href="#" className="form__link">Forgot your password?</a>
                </p>
                <p className="form__text">
                    <a href="#" className="form__link" id="linkCreateAccount">Don't have an account? Create account</a>
                </p>
            </form>
            <form className="form" id="createAccount">
                <h1 className="form__title">Create Account</h1>
                <div className="form__message form__message--error"></div>
                <div className="form__input-group">
                    <input type="text" className="form__input" autoFocus placeholder="Username" />
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input type="text" className="form__input" autoFocus placeholder="Email Address" />
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input type="password" className="form__input" autoFocus placeholder="Password" />
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input type="password" className="form__input" autoFocus placeholder="Confirm Password" />
                    <div className="form__input-error-message"></div>
                </div>
                <button className="form__button" type="submit">Continue</button>
                <p className="form__text">
                    <a href="#" className="form__link" id="linkLogin">Already have an account? Sign in</a>
                </p>
            </form>
        </div>
    );
}


export default LoginPage;
