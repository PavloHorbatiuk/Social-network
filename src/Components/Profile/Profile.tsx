import React from 'react';
import {MyPosts} from './My posts/Myposts';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../Redux/State";

type ProfileType = {
    state: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts
                    MyPostsData={props.state.MyPostsData}
                    newPostText={props.state.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
        </div>


    )
}