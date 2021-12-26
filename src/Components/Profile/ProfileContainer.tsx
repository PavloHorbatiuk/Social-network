import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redax-store";
import {getAxiosProfileType, ProfileType, setUserProfileAC} from "../../Redux/Profile-reducer";
import {Dispatch} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type mapstateToPropsType = {
    profile: null | getAxiosProfileType
}
type mapdispatchToPropsType = {
    setUserProfile: (profile: null) => void
}
export type ProfileContainerType =
    mapstateToPropsType
    & mapdispatchToPropsType
    & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType, ProfileType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
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

let mapdispatchToProps = (dispatch: Dispatch): mapdispatchToPropsType => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        },
    }
};

let mapstateToProps = (state: AppRootStateType): mapstateToPropsType =>
    ({profile: state.profileReducer.profile})
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapstateToProps, mapdispatchToProps)(withUrlDataContainerComponent);