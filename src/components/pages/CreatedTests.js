import React, { Component } from 'react';
import './pages.css';

class CreatedTests extends Component {
    render() {
        return (
        <div className="page">
            <div className="component">
                <div className="row mr-auto">
                    <div className="created col-lg-6 col-md-12">
                        <h1>CreatedTests page</h1>
                    </div>

                    <div className="create col-lg-6 col-md-12">
                        <div className="create-image">
                            <h1>Image</h1>
                        </div>
                        <br/>
                        <br/>
                        <div className="create-button">
                            <button className="btn btn-custom">New</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
}

export default CreatedTests;