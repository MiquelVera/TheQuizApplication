import React, { Component } from 'react';
import './pages.css';

import createdTests from '../../data/created.json';

import { Redirect } from "react-router-dom";
import ViewQuestion from './ViewQuestion';


class Test extends Component{
    
    constructor(props){
        super(props);
        this.id = parseInt(this.props.match.params.id);
        this.tests = createdTests;

        this.questions = [];
        this.o1 = [];
        this.o2 = [];
        this.o3 = [];
        this.o4 = [];
        this.answers = [];
    }

    validId(testId){
        var valid = false;
        this.tests.map(test => {
            if(valid === false && test.id === testId){
                this.name = test.name;
                valid = true;
            }
            return true;
        })
        return valid;
    }

    getTest(){
        //Cargamos los datos del test
        this.tests.map(test => {
            if(test.id === this.id){
                this.name = test.name;
                var q = test.preguntas;
                q.map(question => {
                    this.questions = this.questions.concat(question.question);
                    this.o1 = this.o1.concat(question.option1);
                    this.o2 = this.o2.concat(question.option2);
                    this.o3 = this.o3.concat(question.option3);
                    this.o4 = this.o4.concat(question.option4);
                    this.answers = this.answers.concat(question.answer);
                })
                
            }
            return this.name;
        })
    }

    render(){
        //Si el "id" no es válido (no se encuentra en la base de datos de tests), vamos a NotFoundPage
        if(this.validId(this.id) === false){
            return <Redirect to={{pathname: "/test-not-found"}}/>
        }
        else{
            return(
                <div className="page">
                    {/*Mostramos el ID y el Nombre del test*/}
                    {this.getTest()}
                    
                    <p className="info-text">id: {this.id}</p>
                    <p className="info-text">name: {this.name}</p>

                    {/*Mostramos las preguntas del test*/}
                    {
                        this.questions.map((q,index) => {
                            return <ViewQuestion   question = {q}
                                            option1 = {this.o1[index]}
                                            option2 = {this.o2[index]}
                                            option3 = {this.o3[index]}
                                            option4 = {this.o4[index]}
                                            answer = {this.answers[index]}/>
                        })
                    }
                    
                    
                </div>
            );
        } 
    }
}

export default Test;