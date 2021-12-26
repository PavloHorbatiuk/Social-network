export type DialogsType = typeof initialState
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_USERS_TOTAL_CUOUNT = "SET-USERS-TOTAL-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

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
    isFetching: true
};
export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean

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
        case SET_USERS_TOTAL_CUOUNT: {
            return {...state, totalUserCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
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
        totalCount: 100
    } as const
}
export const isFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }as const
}

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
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
