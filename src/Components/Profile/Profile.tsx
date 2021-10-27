import React from 'react';
import {MyPosts} from './My posts/Myposts';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../Redux/State";

type ProfileType = {
    state: ProfilePageType
    addPost: (postText: string|undefined) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts
                    MyPostsData={props.state.MyPostsData}
                    addPost={props.addPost}/>
            </div>
        </div>


    )
}