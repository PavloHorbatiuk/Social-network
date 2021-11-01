import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
subscribe(rerenderEntireTree);
