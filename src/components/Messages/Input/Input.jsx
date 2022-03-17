import React from 'react';
import s from './Input.module.css'

let Input = (props) => {
        let MessageText = React.useRef()
        let AddMessage = () => {
        let text = MessageText.current.value;
        props.AddMessage(text)
        }
        return (
            <div className={s.wrapper}>
                <textarea ref={ MessageText } placeholder={"Input message"} className={s.input}></textarea>
                <button onClick={ AddMessage } className={s.button}>Send message</button>
            </div>
        );
}

export default Input;

