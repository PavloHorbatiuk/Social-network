import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redax-store";
import {
    FollowingType, getUsersThunkCreator,
    InitialStateType,
    UserType,
    followAC, unFollowAC, setCurrentPageAC, setUsersTotalCountAC, isFetchingAC, toogleFollowingProgresAC, setUsersAC
} from "../Redux/Users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Components/Common/Preloader/Preloader.sx";
import {Action, Dispatch} from "redux";
import {getUsers} from "../API/API";
import {ThunkDispatch} from "redux-thunk";


type mapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgres: Array<FollowingType>
}
type mapDispatchToPRopsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toogleFollowingProgres: (isFetching: boolean, userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapDispatchToPRopsType & mapStateToPropsType;

class UsersContainer extends React.Component<UsersPropsType, InitialStateType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUserCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.usersPage.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toogleFollowingProgres={this.props.toogleFollowingProgres}
                followingInProgres={this.props.followingInProgres}

            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgres: state.users.followingInProgres,
    }
}

const mapDispatchToPRops = (dispatch:ThunkDispatch<AppRootStateType, void, Action>): mapDispatchToPRopsType => {
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
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(isFetchingAC(isFetching))
        },
        toogleFollowingProgres: (isFetching: boolean, userId: number) => {
            dispatch(toogleFollowingProgresAC(isFetching, userId))
        },
        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPRops)(UsersContainer)