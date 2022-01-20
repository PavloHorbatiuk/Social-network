import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer,
    users: usersReducer,
    authReducer,
    form: formReducer
});
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof reducers>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AnyAction>

// @ts-ignore
window.store = store;

export default store;

