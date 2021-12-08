import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redax-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UserType
} from "../Redux/Users-reducer";
import {Dispatch} from "redux";
import Users from "./Users";


type mapStateToPropsType = {
    usersPage: InitialStateType
    pageSize:number
    totalUserCount:number
    currentPage:number
}
type mapDispatchToPRopsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void,

}
export type UsersPropsType = mapDispatchToPRopsType & mapStateToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
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
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToPRops)(Users)