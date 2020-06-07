import React, { Component } from 'react';
import './pages.css';

import items from '../../data/participated.json';

import { Link } from 'react-router-dom';

class ParticipatedTests extends Component {
    
    constructor() {
        super();
        this.tests = items;
    }
    
    render() {
        return (
            <div className="page">
                <div className="component">
                <div className="row mr-auto">
                    <div className="created col-lg-6 col-md-12">
                        {
                        this.tests.map(opcion => {
                            return(
                                <Link to={opcion.link}><button className="btn btn-custom-black" >{opcion.name + ' - ' + opcion.score}</button></Link>
                            );
                        })
                        }
                    </div>
                    <div className="created col-lg-6 col-md-12">
                        <p className="info-text">
                            As a participant you can only know your final score in the tests you've participared in.
                        </p>
                    </div>
                </div>
            </div>

            </div>
        );
    }
}

export default ParticipatedTests;