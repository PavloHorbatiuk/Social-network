import React, {ChangeEvent} from 'react';
import {Posts} from './Posts/Posts';
import s from './MyPosts.module.css';
import {Button, TextField} from "@mui/material";
import {addPostActionCreator, DispatchAcType, onPostChangeActionCreator} from "../../../Redux/State";

type MyPostsDataType = {
    id: number,
    message: string,
    LikesCount: string
}
type MyPostsType = {
    MyPostsData: Array<MyPostsDataType>
    newPostText: string
    dispatch: (action: DispatchAcType) => void
    newText: string
}


export const MyPosts = (props: MyPostsType) => {
    let PostsElement = props.MyPostsData.map(m => <Posts message={m.message} LikesCount={m.LikesCount}  />)
    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText));
    }
    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let action = onPostChangeActionCreator(e.currentTarget?.value)
        props.dispatch(action)
    }
    return <div>
        <div className={s.posts}>
            {PostsElement}
        </div>
        <div>
            {/*<h2>{props.newPostText}</h2>*/}
            <div>
                <TextField label="Chat" value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <Button onClick={addPost}>Add post</Button>
            </div>
        </div>
    </div>
}


