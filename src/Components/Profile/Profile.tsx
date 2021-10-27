import React from 'react';
import {MyPosts} from './My posts/Myposts';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../Redux/State";


export const Profile = (props: { state: ProfilePageType, addPost: (postText: string) => void }) => {

    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts MyPostsData={props.state.MyPostsData} addPost={props.addPost}/>
            </div>
        </div>


    )
}