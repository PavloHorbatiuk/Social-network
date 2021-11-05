import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {stateType} from "./Redux/State";
import ReactDOM from 'react-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
