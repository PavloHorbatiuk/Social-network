import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/Posts/MypostsConteiner";
import {getAxiosProfileType} from "../../Redux/Profile-reducer";

type ProfileType = {
    profile: null | getAxiosProfileType
    status: string
    updateStatus: (status: string) => void
}


export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>


    )
}