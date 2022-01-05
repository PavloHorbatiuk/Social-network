import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redax-store";
import {getAxiosProfileType, getUsersProfile, ProfileType} from "../../Redux/Profile-reducer";

import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string

}
type mapstateToPropsType = {
    profile: null | getAxiosProfileType
}
type mapdispatchToPropsType = {
    getUsersProfile: (userId: string) => void
}
export type ProfileContainerType =
    mapstateToPropsType
    & mapdispatchToPropsType
    & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerType, ProfileType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        this.props.getUsersProfile(userId)
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={"/Login"}/>
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }
}


let mapStateToProps = (state: AppRootStateType): mapstateToPropsType => {
    return {
        profile: state.profileReducer.profile,
    }

}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect (connect(mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent));