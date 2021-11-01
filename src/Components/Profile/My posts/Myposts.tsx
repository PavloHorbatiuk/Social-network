import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {Posts} from './Posts/Posts';
import s from './MyPosts.module.css';
import {Button, InputUnstyled, TextareaAutosize, TextField} from "@mui/material";
import {InputOutlined, TextFields, TextFieldsOutlined, TextFieldsTwoTone} from "@mui/icons-material";

type MyPostsDataType = {
    id: number,
    message: string,
    LikesCount: string
}
type MyPostsType = {
    MyPostsData: Array<MyPostsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsType) => {
    let PostsElement = props.MyPostsData.map(m => <Posts message={m.message} LikesCount={m.LikesCount}/>)
    let addPost = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewPostText(e.currentTarget?.value)
    }
    return <div>
        <div className={s.posts}>
            {PostsElement}
        </div>
        <div>
            <h2>{props.updateNewPostText}</h2>
            <div>
                <TextField  label="Chat"   value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <Button onClick={addPost}>Add post</Button>
            </div>
        </div>
    </div>
}

function postText(postText: any) {
    throw new Error('Function not implemented.');
}

