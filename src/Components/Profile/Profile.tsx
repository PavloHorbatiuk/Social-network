import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/Posts/MypostsConteiner";




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