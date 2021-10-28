import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, stateType} from "./Redux/State";


export let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

