import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import state, {subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {store.getState()} store = {store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
