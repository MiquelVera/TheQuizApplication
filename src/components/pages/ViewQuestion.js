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

                <form>
                    <div className="custom-control custom-radio opcion">
                        <input type="radio" id="radio1" name="answer" value="1"/>
                        <label for="radio1" className="label">{this.o1}</label>
                    </div>

                    <div className="custom-control custom-radio opcion">
                        <input type="radio" id="radio2" name="answer" value="2"/>
                        <label for="radio2" className="label">{this.o2}</label>  
                    </div>

                    <div className="custom-control custom-radio opcion">
                        <input type="radio" id="radio3" name="answer" value="3"/>
                        <label for="radio3" className="label">{this.o3}</label>  
                    </div>
                    
                    <div className="custom-control custom-radio opcion">
                        <input type="radio" id="radio4" name="answer" value="4"/>
                        <label for="radio4" className="label">{this.o4}</label>    
                    </div>
                </form>


                <p className="answer">{this.answer}</p>

                



                

            </div>
        );
    }

}

export default ViewQuestion;