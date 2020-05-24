import React, { Component } from 'react';
import './pages.css';
import './login.css'

import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
        <div className="page">
            <div className="wrapper">
            <div className="formContent">
            <div>
                <h1 id="log-tittle">The Quiz Application</h1>
            </div>
            <form id="formulario_login">
                <input type="email" id="email" class="fadeIn second" name="email" placeholder="Mail"/>
                <input type="password" id="password" class="fadeIn third" name="password" placeholder="Password"/>
                <input type="submit" class="fadeIn fourth" value="Log In"/>
            </form>
            <div className="createAccDiv">
                <Link className="nav-link ml-5" to="/created-tests" id="createAccBut">Create an account</Link>
            </div>
            </div>
           
        </div>
        </div>
        );
    }
}

export default Login;