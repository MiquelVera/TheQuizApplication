import React, { Component } from 'react';
import './pages.css';
import './profile.css';

import data from '../../data/profile.json';

class Profile extends Component {
    render() {
        return (
            <div className="page">
                <div className="component">
                    <div className="profile row text-center mr-auto">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="info-text">{'@' + data.username}</p>
                            <p className="info-text">{data.name}</p>
                            <p className="info-text">{data.lastname}</p>
                        </div>                      
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Profile;