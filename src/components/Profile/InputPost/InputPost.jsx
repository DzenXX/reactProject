import React from 'react';
import s from './InputPost.module.css'

let InputPost = (props) => {
        let PostText = React.useRef()
        let AddPost = () => {
        let text = PostText.current.value;
        props.AddPost(text);
        PostText.current.value = ''
        }
        return (
            <div className={s.wrapper}>
                <textarea ref={ PostText } placeholder={"Input content for new post"} className={s.input}></textarea>
                <button onClick={ AddPost } className={s.button}>Create post</button>
            </div>
        );
}

export default InputPost;

