import React from 'react';
import s from './InputPost.module.css';
import {Field} from "redux-form";
import {maxLength, required} from "../../../../../utilits/validators/validators";
import ComponentForField from "../../../../../hoc/ComponentForField";

const maxLength100 = maxLength(100)

let InputPost = (props) => {


        return (
            <form onSubmit={props.handleSubmit} className={s.wrapper}>
                <Field validate={[required, maxLength100]} component={'textarea'} name={'postText'} placeholder={"Input content for new post"} className={s.input}></Field>
                <button className={s.button}>Create post</button>
            </form>
        );
}



export default InputPost;

