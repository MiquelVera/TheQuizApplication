import React, { Component } from 'react';
import './pages.css';
import questionMarkBlue from '../../QuestionMark(blue).png';

import items from '../../data/created.json';

import { Link } from 'react-router-dom';

class CreatedTests extends Component {

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
                            this.published = false;
                            this.testName = opcion.name;
                            this.testClassName = 'btn btn-custom-black';

                            if(opcion.state === 'published'){
                                this.published = true;
                            }
                            
                            if(!this.published){
                                this.testName = opcion.name + ' (NOT PUBLISHED)';
                                this.testClassName = 'btn btn-custom-black not-published';
                            }

                            return(
                                <Link to={opcion.link}><button className={this.testClassName} >{this.testName}</button></Link>
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
                            <p className="info-text">
                                Here you can create a new test and manage all your already created tests.
                            </p>
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