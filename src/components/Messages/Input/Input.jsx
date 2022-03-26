import React from 'react';
import s from './Input.module.css'

let Input = (props) => {
        let OnMessageChange = (e) => {
            props.updateNewMessageText(e.target.value)
            debugger;
        }
        let AddMessage = () => {
        props.addMessage()
        }
        return (
            <div className={s.wrapper}>
                <textarea onChange={OnMessageChange} placeholder={"Input message"} className={s.input} value={props.newMessageText}></textarea>
                <button onClick={ AddMessage } className={s.button}>Send message</button>
            </div>
        );
}

export default Input;

