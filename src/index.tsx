import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, stateType, subscribe, updateNewPostText} from "./Redux/State";
import ReactDOM from 'react-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
subscribe(rerenderEntireTree);
