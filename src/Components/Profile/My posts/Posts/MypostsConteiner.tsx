import React, {ChangeEvent, KeyboardEventHandler} from 'react';
import {MyPosts} from "../Myposts";
import {
    addPostActionCreator,
    onPostChangeActionCreator,
    profileReducer,
    ProfileType
} from "../../../../Redux/Profile-reducer";
import store, {AppRootStateType} from "../../../../Redux/redax-store";
import {connect, ConnectedProps, useDispatch, useSelector} from "react-redux";
import {DialogsType} from "../../../../Redux/Dialogs-reducer";
import {runInNewContext} from "vm";

type MyPostsDataType = {
    id: number,
    message: string,
    LikesCount: string
}
type MyPostsContainerType = {}


const MyPostsContainer = () => {
    const dispatch = useDispatch();
    const profilePage = useSelector<AppRootStateType, ProfileType>(state => state.profileReducer)
    let addPost = () => {
        dispatch(addPostActionCreator())
    }
    const onPostChangeContainer = (newText: string) => {
        dispatch(onPostChangeActionCreator(newText))

    }

    return (<div>
            <MyPosts
                addPost={addPost}
                onPostChangeContainer={onPostChangeContainer}
                postProfile={profilePage.ProfilePage.postProfile}
            />
        </div>
    )
}


export default MyPostsContainer