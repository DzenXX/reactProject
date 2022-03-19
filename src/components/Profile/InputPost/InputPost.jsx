import React from 'react';
import s from './InputPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



let InputPost = (props) => {
        let postText = React.useRef()
        let OnPostChange = () => {
                let newText = postText.current.value;
                let action = updateNewPostTextActionCreator(newText);
                props.dispatch(action)
                debugger;
        }
        let AddPost = () => {
        props.dispatch(addPostActionCreator());
        postText.current.value = '';
        }
        return (
            <div className={s.wrapper}>
                <textarea onChange={OnPostChange} ref={postText} placeholder={"Input content for new post"} className={s.input} value={props.store.getNewPostText()}></textarea>
                <button onClick={AddPost} className={s.button}>Create post</button>
            </div>
        );
}

export default InputPost;

