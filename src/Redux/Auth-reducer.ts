import {stringify} from "querystring";

const SET_USER_DATA = "SET-USER-DATA";

export type  DataType = {
    id: number,
    email: string,
    login: string,
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


type setUserDataACType = ReturnType<typeof setUserDataAC>
type ActionAuthType = setUserDataACType


export default authReducer;










