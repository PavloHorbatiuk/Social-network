export type DialogsType = typeof initialState
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_USERS_TOTAL_CUOUNT = "SET-USERS-TOTAL-COUNT"

export type UserType = {
    id: number,
    photos: PhotosType
    followed: boolean,
    name: string,
    status: string
}
type PhotosType = {
    Small: string
    Big: string
}
export const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2,
};
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUserCount: number,
    currentPage: number
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_CUOUNT:{
            return {...state,totalUserCount:action.totalCount}
        }
        default:
            return state;
    }
}
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId,
    } as const
}
export const unFollowAC = (userId: number) => {
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
        totalCount
    } as const
}

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACACType = ReturnType<typeof setUsersAC>
type setCurrentPageAC = ReturnType<typeof setCurrentPageAC>
type setUsersTotalCountAC = ReturnType<typeof setUsersTotalCountAC>


export type ActionTypes =
    followACType
    | unFollowACType
    | setUsersACACType
    | setCurrentPageAC
    | setUsersTotalCountAC
