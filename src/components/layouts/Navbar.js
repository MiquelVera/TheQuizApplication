import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar(){
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">TheQuizApplication</Link>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarMenu" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link ml-5" to="/created-tests">CREATED TESTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-5" to="/participated-tests">PARTICIPATED TESTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-5" to="/profile">PROFILE</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;