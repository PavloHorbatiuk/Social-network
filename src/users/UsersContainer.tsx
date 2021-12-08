import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redax-store";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UserType} from "../Redux/Users-reducer";
import {Dispatch} from "redux";
import Users from "./Users";


type mapStateToPropsType = {
    usersPage: InitialStateType
}
type mapDispatchToPRopsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = mapDispatchToPRopsType & mapStateToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: state.users
    }
}

const mapDispatchToPRops = (dispatch: Dispatch): mapDispatchToPRopsType => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToPRops)(Users)