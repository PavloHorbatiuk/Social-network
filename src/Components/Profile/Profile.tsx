import React from 'react';
import {MyPosts} from './My posts/Myposts';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../Redux/State";

type ProfileType = {
    state: ProfilePageType
    addPostCallBack: (postText: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts
                    MyPostsData={props.state.MyPostsData}
                    addPostCallBack={props.addPostCallBack}/>
            </div>
        </div>


    )
}