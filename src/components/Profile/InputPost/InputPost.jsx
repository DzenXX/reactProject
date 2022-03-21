import React from 'react';
import s from './InputPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



let InputPost = (props) => {
        let OnPostChange = (e) => {
                let action = updateNewPostTextActionCreator(e.target.value);
                props.dispatch(action)
                debugger;
        }
        let AddPost = () => {
        props.dispatch(addPostActionCreator());
        }
        return (
            <div className={s.wrapper}>
                <textarea onChange={OnPostChange} placeholder={"Input content for new post"} className={s.input} value={props.store.getState().profilePage.newPostText}></textarea>
                <button onClick={AddPost} className={s.button}>Create post</button>
            </div>
        );
}

export default InputPost;

