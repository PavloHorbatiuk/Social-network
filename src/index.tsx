import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import store, {AppRootStateType} from "./Redux/redax-store";
import {Provider} from "react-redux";


// let rerenderEntireTree = (store: AppRootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
// }
let state = store.getState()

// rerenderEntireTree(state);
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state);
// });
