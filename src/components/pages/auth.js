import React, { Component } from 'react';
import Login from "../auth/login"
import loginImg from "../../../static/assets/images/auth/auth.png"

export default class Auth extends Component {
<<<<<<< HEAD
=======
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin
    }
>>>>>>> origin/main
    render() {
        return(
            <div className="auth-page-wrapper">
                <div 
                    className="left-column"
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div className="right-column">
<<<<<<< HEAD
                    <Login />
=======
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
>>>>>>> origin/main
                </div>
            </div>
        );
    }
}