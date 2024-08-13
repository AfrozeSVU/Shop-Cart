  
import React from 'react';
import './Login.css'

function LoginPage() {
    return (
        <div id="loginPage">
             

            <div className="container">
                <div className="row">
                    <h2 className="home-title text-center">Welcome to Shop Cart</h2>
                </div>
                <div className="login-wrapper" id="loginForm">
                    <h4 className="text-center">Login</h4>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Username" id="loginUsername" />
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-control" placeholder="Password" id="loginPassword" />
                    </div>
                    <div className="input-group">
                        <button className="form-control btn btn-primary">Log In As User</button>
                    </div>
                    <div className="signup-btn text-center" id="showSignupBtn">Don't have an Account? Sign Up Here</div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
