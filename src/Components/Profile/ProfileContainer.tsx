import React from 'react';
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppRootStateType } from "../../Redux/redax-store";
import { getAxiosProfileType, getStatus, getUsersProfile, ProfileType, updateStatus } from "../../Redux/Profile-reducer";

import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


type PathParamsType = {
    userId: string

}
type mapstateToPropsType = {
    profile: null | getAxiosProfileType
    status: string
    // updateStatus:string
}
type mapdispatchToPropsType = {
    getUsersProfile: (userId: string) => void;
    getStatus: (userId: string) => void;
    updateStatus:(status:string)=>void
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
    
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={"/Login"}/>
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}


let mapStateToProps = (state: AppRootStateType): mapstateToPropsType => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        // updateStatus:state.profileReducer.updateStatus
    }
}

// let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
    withAuthRedirect)(ProfileContainer);


// withAuthRedirect (connect(mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent));