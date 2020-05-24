import React, { Component } from 'react';
import './pages.css';
import questionMarkBlue from '../../QuestionMark(blue).png';

import { Link } from 'react-router-dom';

class CreatedTests extends Component {

    constructor() {
        super();
        this.tests =[{name: 'Test 1', link: '/created-tests'},
                     {name: 'Test 2', link: '/created-tests'},
                     {name: 'Test 3', link: '/created-tests'},
                     {name: 'Test 4', link: '/created-tests'},
                     {name: 'Test 5', link: '/created-tests'},];
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
                                <Link to={opcion.link}><button className="btn btn-custom-black" >{opcion.name}</button></Link>
                            );
                        })
                        }
                    </div>

                    <div className="create col-lg-6 col-md-12">
                        <div className="create-button">
                            <Link to='/test-creation'><button className="btn btn-custom-blue">+ New test</button></Link>
                        </div>
                        <br/>
                        <br/>
                        <div className="create-image">
                            <img className="questionMarkImage" src={questionMarkBlue} alt="questionMarkImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
}

export default CreatedTests;