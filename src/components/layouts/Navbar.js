import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
class Navbar extends React.Component{

    constructor(props){
        super(props);
        if(this.props.state === 'logged'){
            this.opciones = [{texto: 'CREATED TESTS', link: '/created-tests'}, {texto: 'PARTICIPATED TESTS', link: '/participated-tests'}, {texto:'PROFILE', link: '/profile'}];
        }
        else{
            this.opciones = [{texto: 'LOGIN', link: '/login'}];
            }
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">TheQuizApplication</Link>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarMenu" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {
                        this.opciones.map((opcion,i) => {
                            return(
                            <li className="nav-item">
                                <Link className="nav-link ml-5" to={opcion.link}>{opcion.texto}</Link>
                            </li>
                            );
                        })
                    }
                    
                </ul>
            </div>
        </nav>
        ); 
    }
}
/*function Navbar(){
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
}*/

export default Navbar;