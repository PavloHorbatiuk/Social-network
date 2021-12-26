import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/Posts/MypostsConteiner";
import {getAxiosProfileType} from "../../Redux/Profile-reducer";

type ProfileType = {
    profile: null|getAxiosProfileType
}


export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>


    )
}