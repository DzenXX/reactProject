import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AddPost, AddMessage, UpdateNewPostText, UpdateNewMessageText } from "./redux/state";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {state} AddPost = { AddPost } AddMessage = { AddMessage } UpdateNewMessageText={UpdateNewMessageText} UpdateNewPostText={UpdateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
subscribe(rerenderEntireTree)

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
