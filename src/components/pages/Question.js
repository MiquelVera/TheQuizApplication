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

            </div>
        )
    }
}

export default Question;