import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./Users-reducer";
import authReducer from "./Auth-reducer";


let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer,
    users: usersReducer,
    authReducer
});
export const store = createStore(reducers);

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;

export default store;