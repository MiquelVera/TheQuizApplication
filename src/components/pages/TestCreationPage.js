import React, { Component } from 'react';
import './pages.css';
import Question from './Question';


class TestCreation extends Component{
    render(){
        return(
            <div className="page">
                 <div className="component">
                 <div>
                    <h1 id="log-tittle">Test Creation</h1>
                </div>
                <div className="test-creation">
                    <label>Test title: </label>
                    <input type="text" />
                    <hr/>
                    <div className="preguntas">
                        <Question />
                    </div>
                </div>
                 </div>
            </div>
        )
    }
}


export default TestCreation;