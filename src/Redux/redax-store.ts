import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers= combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer
});

export const store = createStore(reducers);

export type AppRootStateType = ReturnType<typeof reducers>


export default store;