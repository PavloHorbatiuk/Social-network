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
import axios from "axios";
import Users from "./Users";


type mapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type mapDispatchToPRopsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void,

}

export type UsersPropsType = mapDispatchToPRopsType & mapStateToPropsType

class UsersContainer extends React.Component<UsersPropsType, InitialStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <Users
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            users={this.props.usersPage.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

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
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToPRops)(UsersContainer)