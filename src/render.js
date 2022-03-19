import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AddPost, AddMessage, UpdateNewPostText, UpdateNewMessageText } from "./redux/state";
// import reportWebVitals from './reportWebVitals';



export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {state} AddPost = { AddPost } AddMessage = { AddMessage } UpdateNewMessageText={UpdateNewMessageText} UpdateNewPostText={UpdateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
