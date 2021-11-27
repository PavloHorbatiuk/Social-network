import React from 'react';
import {AppRootStateType} from "../../Redux/redax-store";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/Posts/MypostsConteiner";

;


type ProfileType = {
    store: AppRootStateType
    // newPostText: string

}

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPostsContainer/>
            </div>
        </div>


    )
}