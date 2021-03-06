import React from 'react';
import { connect } from "react-redux";
import { AppRootStateType } from "../Redux/redax-store";
import {
    followACSuccess,
    FollowingType, getUsersThunkCreator,
    InitialStateType, setCurrentPageAC, toogleFollowingProgresAC, unFollowACSuccess
} from "../Redux/Users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Components/Common/Preloader/Preloader.sx";
import { Action, compose } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFolliwingInPorgress,
    getIsFetching,
    getPageSize,
    getTOtalUsersCount,
    getUsers
} from "../Redux/users-selectors";


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
    setCurrentPage: (pageNumber: number) => void
    toogleFollowingProgres: (isFetching: boolean, userId: number) => void,
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapDispatchToPRopsType & mapStateToPropsType;

class UsersContainer extends React.Component<UsersPropsType, InitialStateType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsersThunkCreator(currentPage, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUserCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.usersPage.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgres={this.props.followingInProgres}

            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTOtalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFolliwingInPorgress(state),
    }
}

const mapDispatchToPRops = (dispatch: ThunkDispatch<AppRootStateType, void, Action>): mapDispatchToPRopsType => {
    return {
        follow: (usersId: number) => {
            dispatch(followACSuccess(usersId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowACSuccess(userId))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toogleFollowingProgres: (isFetching: boolean, userId: number) => {
            dispatch(toogleFollowingProgresAC(isFetching, userId))
        },
        getUsersThunkCreator: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }
    }
}

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, mapDispatchToPRops),
)(UsersContainer);