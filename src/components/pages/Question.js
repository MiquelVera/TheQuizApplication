import React, { Component } from 'react';
import './pages.css';
import './text-creation.css';

class Question extends Component{
   

    render(){
        return(
            <div className='pregunta'>
 
                <div className='question'>
                <label>Question:</label>
                <input type="text-area" className='question'/>
                </div>
                <div className="respuesta">
                <label>Answer #1:</label>
                <input type="text-area" className='respuesta'/>
                </div>
                <div className="respuesta">
                <label>Answer #2: </label>
                <input type="text-area"className='respuesta'/>
                </div>

                <div className="respuesta">
                <label>Answer #3: </label>
                <input type="text-area" className='respuesta'/>
                </div>

                <div className="respuesta">
                <label>Answer #4: </label>
                <input type="text-area" className='respuesta'/>
                </div>
                <div className="radio-respuesta-correcta">
                <p>Choose the correct answer: </p>
                <input type="radio" id="radio1" name="answer" value="1"/>
                <label for="radio1">#1</label>
                <input type="radio" id="radio2" name="answer" value="2"/>
                <label for="radio2">#2</label>  
                <input type="radio" id="radio3" name="answer" value="3"/>
                <label for="radio3">#3</label>  
                <input type="radio" id="radio4" name="answer" value="4"/>
                <label for="radio4">#4</label>    
                </div>
                <hr/>
            </div>
        )
    }
}

export default Question;