import React from 'react';
import s from './Input.module.css'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/message-reducer";

let Input = (props) => {
        let OnMessageChange = (e) => {
            let newText = e.target.value
            props.store.dispatch(updateNewMessageTextActionCreator(newText));
            debugger;
        }
        let AddMessage = () => {
        // let text = MessageText.current.value;
        props.store.dispatch(addMessageActionCreator())
        }
        return (
            <div className={s.wrapper}>
                <textarea onChange={OnMessageChange} placeholder={"Input message"} className={s.input} value={props.store.getState().messagePage.newMessageText}></textarea>
                <button onClick={ AddMessage } className={s.button}>Send message</button>
            </div>
        );
}

export default Input;

