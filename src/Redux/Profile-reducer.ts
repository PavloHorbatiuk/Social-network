import { Dispatch } from "redux";
import { profileAPI, userAPI } from "../API/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_STATUS = "SET-STATUS";


export type getAxiosProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
}
export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type photosType = {
    small: string
    large: string
}

export type ChangeNewPostACType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}


export type ProfileType = typeof initialState

export const initialState = {
    MyPostsData: [
        { id: 1, message: 'Hello my friend', LikesCount: '12' },
        { id: 2, message: 'This is my first post', LikesCount: '10' },
        { id: 3, message: 'DaDa', LikesCount: '10' },
    ],
    postProfile: "",
    profile: null,
    status: '',
};

export const profileReducer = (state: ProfileType = initialState, action: ActionTypes): typeof initialState => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date().getTime(),
                message: state.postProfile,
                LikesCount: "0"
            }
            return {
                ...state,
                MyPostsData: [...state.MyPostsData, newPost],
                postProfile: ''

            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, postProfile: action.newText }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USERS_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const setUserProfileAC = (profile: null) => {
    return {
        type: "SET-USERS-PROFILE",
        profile
    } as const
}
export const onPostChangeActionCreator = (newText: string): ChangeNewPostACType => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}
type setStatusACType = ReturnType<typeof setStatusAC>
type setUsersProfileActionCreatorType = ReturnType<typeof setUserProfileAC>
type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type OnPostChangeActionCreatorType = ReturnType<typeof onPostChangeActionCreator>
type ActionTypes = AddPostActionCreatorType
    | OnPostChangeActionCreatorType
    | setUsersProfileActionCreatorType
    | setStatusACType


export const getUsersProfile = (userId: string) => (dispatch: Dispatch) => {
    
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            debugger
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}