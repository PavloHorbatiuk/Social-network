import {Dispatch} from "redux";
import {authAPI} from "../API/API";

const SET_USER_DATA = "SET-USER-DATA";

export type  DataType = {
    id: number,
    email: string,
    login: string,
}
export type isAuthType={
    isAuth: boolean
}
export type AuthType = typeof initialState
export const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state: AuthType = initialState, action: ActionAuthType): typeof initialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setUserDataAC = (id:null, login:null, email:null) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const
}
export const getUserData=()=>(dispatch:Dispatch)=>{
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAC(response.data.data.id, response.data.data.login,
                response.data.data.email))
        }
    })
}

type setUserDataACType = ReturnType<typeof setUserDataAC>
type ActionAuthType = setUserDataACType


export default authReducer;










