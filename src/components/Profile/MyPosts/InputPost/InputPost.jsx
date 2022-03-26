import React from 'react';
import s from './InputPost.module.css';



let InputPost = (props) => {
        let OnPostChange = (e) => {
                props.updateNewPostText(e.target.value)
        }
        let AddPost = () => {
        props.addPost();
        }
        return (
            <div className={s.wrapper}>
                <textarea onChange={OnPostChange} placeholder={"Input content for new post"} className={s.input} value={props.newPostText}></textarea>
                <button onClick={AddPost} className={s.button}>Create post</button>
            </div>
        );
}

export default InputPost;

