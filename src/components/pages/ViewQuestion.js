import React, { Component } from 'react';
import './pages.css';
import './viewQuestion.css';

class ViewQuestion extends Component{

    constructor(props){
        super(props);

        this.q = props.question;
        this.o1 = props.option1;
        this.o2 = props.option2;
        this.o3 = props.option3;
        this.o4 = props.option4;
        this.answer = props.answer;
    }

    render(){
        return(
            <div className="quiz">
                <p className="question">{this.q}</p>
                <p className="option">{this.o1}</p>
                <p className="option">{this.o2}</p>
                <p className="option">{this.o3}</p>
                <p className="option">{this.o4}</p>
                <p className="answer">{this.answer}</p>
            </div>
            
        );
    }

}

export default ViewQuestion;