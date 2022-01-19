import { Dispatch } from "redux";
import { userAPI } from "../API/API";


export type DialogsType = typeof initialState
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_USERS_TOTAL_CUOUNT = "SET-USERS-TOTAL-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"
export type FollowingType = {}
export type UserType = {
    id: number,
    photos: PhotosType
    followed: boolean,
    name: string,
    status: string
}
type PhotosType = {
    small: string
    Large: string
}
export const initialState: InitialStateType = {
    users: [],
    pageSize: 7,
    totalUserCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgres: [],
};
export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgres: Array<FollowingType>,

}


export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            console.log(action.users);
            const test = action.users.reverse()
            console.log(action.users.reverse())
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_USERS_TOTAL_CUOUNT: {
            return { ...state, totalUserCount: action.totalCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgres: action.isFetching ?
                    [...state.followingInProgres, action.userId] :
                    [...state.followingInProgres.filter(id => id != action.userId)]
            }
        }
        default:
            return state;
    }
}


export const toogleFollowingProgresAC = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
}
export const followACSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId,
    } as const
}
export const unFollowACSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: SET_USERS_TOTAL_CUOUNT,
        totalCount: 100
    } as const
}
export const isFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
type toogleFollowingProgresACType = ReturnType<typeof toogleFollowingProgresAC>
type followACType = ReturnType<typeof followACSuccess>
type unFollowACType = ReturnType<typeof unFollowACSuccess>
type setUsersACACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
type isFetchingACType = ReturnType<typeof isFetchingAC>


export type ActionTypes =
    followACType
    | unFollowACType
    | setUsersACACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | isFetchingACType
    | toogleFollowingProgresACType


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(isFetchingAC(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(setCurrentPageAC(currentPage))
            dispatch(isFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setUsersTotalCountAC(data.totalCount));
        })
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toogleFollowingProgresAC(true, userId))
        userAPI.getUsersFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followACSuccess(userId))
            }
            dispatch(toogleFollowingProgresAC(false, userId))
        })
    }
}
export const unFollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        toogleFollowingProgresAC(true, userId)
        userAPI.getUsersUnFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                unFollowACSuccess(userId)
            }
            toogleFollowingProgresAC(false, userId)
        })
    }
}
