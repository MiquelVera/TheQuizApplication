import React, { Component } from 'react';
import './pages.css';
import logo from '../../logo.png';

class Home extends Component {
    render() {
        return (
        <div className="page">
            <img className="logo" src={logo} alt="logo"/>   
        </div>
        );
    }
}

export default Home;