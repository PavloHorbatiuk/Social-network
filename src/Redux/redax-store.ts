import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {ActionTypes, usersReducer} from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"

let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer,
    users: usersReducer,
    authReducer
});
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof reducers>

export type AllAction = ActionTypes
export type AppTypeAction = ThunkAction<void, AppRootStateType, unknown, AllAction>
// @ts-ignore
window.store = store;

export default store;