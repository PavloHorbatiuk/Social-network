import React from 'react';
import {MyPosts} from './My posts/Myposts';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {DispatchAcType, ProfilePageType, storeType} from "../../Redux/State";

type ProfileType = {
    state: ProfilePageType
    dispatch: (action: DispatchAcType) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts
                    MyPostsData={props.state.MyPostsData}
                    newPostText={props.state.newPostText}
                    dispatch={props.dispatch}
                    newText=""
                />
            </div>
        </div>


    )
}