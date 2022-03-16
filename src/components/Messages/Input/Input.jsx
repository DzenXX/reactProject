import React from 'react';
import s from './Input.module.css'

let Input = () => {
        let MessageText = React.useRef()
        let NewMessage = (props) => {
        alert(`Your message '${MessageText.current.value}' has been send! `)
        }
        return (
            <div className={s.wrapper}>
                <textarea ref={ MessageText } placeholder={"Input message"} className={s.input}></textarea>
                <button onClick={ NewMessage } className={s.button}>Send message</button>
            </div>
        );
}

export default Input;

