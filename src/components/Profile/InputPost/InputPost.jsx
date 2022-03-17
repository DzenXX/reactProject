import React from 'react';
import s from './InputPost.module.css'

let InputPost = (props) => {
        let postText = React.useRef()
        let OnPostChange = () => {
                let newText = postText.current.value;
                props.UpdateNewPostText(newText)
        }
        let AddPost = () => {
        props.AddPost();
        postText.current.value = '';
        }
        return (
            <div className={s.wrapper}>
                <textarea onChange={OnPostChange} ref={postText} placeholder={"Input content for new post"} className={s.input} value={props.newPostText}></textarea>
                <button onClick={AddPost} className={s.button}>Create post</button>
            </div>
        );
}

export default InputPost;

