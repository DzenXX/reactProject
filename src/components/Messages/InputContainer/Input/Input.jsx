import React from 'react';
import s from './Input.module.css'
import {Field} from "redux-form";

let Input = (props) => {
        return (
            <form className={s.line} onSubmit={props.handleSubmit}>
                <Field component={'textarea'} name={'text'} placeholder={"Input message"} className={s.input}></Field>
                <button className={s.button}>Send message</button>
            </form>
        );
}

export default Input;

