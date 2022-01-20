import {Dispatch} from "redux";
import {authAPI} from "../API/API";
import {ThunkAction} from "redux-thunk";
import {InjectedFormProps, stopSubmit} from "redux-form";
import {AppThunk} from "./redax-store";

const SET_USER_DATA = "SET-USER-DATA";

export type DataType = {
    id: string;
    email: string;
    login: string;
};
export type isAuthType = {
    isAuth: boolean;
};
export type AuthType = typeof initialState;
export const initialState = {
    id: 1,
    email: "",
    login: "",
    isAuth: false,
};

const authReducer = (
    state: AuthType = initialState,
    action: ActionAuthType
): typeof initialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setUserDataAC = (
    id: number,
    login: string,
    email: string,
    isAuth: boolean
) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth},
    } as const;
};
export const getUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(
                setUserDataAC(
                    response.data.data.id,
                    response.data.data.login,
                    response.data.data.email,
                    true
                )
            );
        }
    });
};


export const login = (email: string, password: string, rememberMe: false): AppThunk =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                dispatch(stopSubmit("Login", {_error: message}))
            }
        });
    };

export const LogOut = (): ThunkType => (dispatch) => {
    authAPI.Logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAC(response.data.id, response.data.login, response.data.email, false));
        }
    });
};
type ThunkType = ThunkAction<void, AuthType, unknown, ActionAuthType>;
type setUserDataACType = ReturnType<typeof setUserDataAC>;
type ActionAuthType = setUserDataACType;

export default authReducer;
