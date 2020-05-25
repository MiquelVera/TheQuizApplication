import React, { Component } from 'react';
import './pages.css';
import Question from './Question';
import './text-creation.css';

class TestCreation extends Component{
    constructor(props){
        super(props);
        this.state ={
            arrayPreguntas :[]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        const arrayPreguntas = this.state.arrayPreguntas;
        this.setState({
            arrayPreguntas : arrayPreguntas.concat(<Question  type="text"/>)
        });
    }


    render(){
        return(
            <div className="page">
                 <div className="component">
                 <div>
                    <h1 id="log-tittle">Test Creation</h1>
                    
                </div>
                <div className="test-creation">
                    <div className="cabecera">
                    <label>Test title: </label>
                    <input type="text-area" id="test-title"/>
                    <button onClick={this.handleClick} id="addQst" className="testBtns">Add test Question</button>
                    </div>
                    <hr/>
                    <div className="preguntas">
                        {this.state.arrayPreguntas.map(function(question,index){
                            return <Question/>
                        }
                        
                        )}
                    </div>
                    <div className="sendBtns">
                        <button id="send" className="testBtns"> Send test </button>
                    </div>
                </div>
                 </div>
            </div>
        )
    }
}


export default TestCreation;