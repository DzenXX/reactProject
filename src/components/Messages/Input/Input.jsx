import React from 'react';
import s from './Input.module.css'

let Input = (props) => {
        let MessageText = React.useRef()
        let OnMessageChange = () => {
              let newText = MessageText.current.value;
              props.UpdateNewMessageText(newText);
        }
        let AddMessage = () => {
        let text = MessageText.current.value;
        props.AddMessage(text)
        }
        return (
            <div className={s.wrapper}>
                <textarea onChange={OnMessageChange} ref={ MessageText } placeholder={"Input message"} className={s.input} value={props.newMessageText}></textarea>
                <button onClick={ AddMessage } className={s.button}>Send message</button>
            </div>
        );
}

export default Input;

