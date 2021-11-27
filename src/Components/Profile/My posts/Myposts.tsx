import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Posts} from './Posts/Posts';
import s from './MyPosts.module.css';
import {Button, TextField, Typography} from "@mui/material";
import {AppRootStateType} from "../../../Redux/redax-store";
import {useSelector} from "react-redux";
import {ProfileType} from "../../../Redux/Profile-reducer";


type MyPostsDataType = {
    id: number,
    message: string,
    LikesCount: string
}
type MyPostsType = {
    postProfile: string
    addPost: () => void
    onPostChangeContainer: (newText: string) => void

}


export const MyPosts = (props: MyPostsType) => {
    const profilePage = useSelector<AppRootStateType, ProfileType>(state => state.profileReducer)
    let postsElement = profilePage.ProfilePage.MyPostsData.map(m => <Posts message={m.message}
                                                                           LikesCount={m.LikesCount}/>)
    let onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value;
        props.onPostChangeContainer(newText)
    }
    const onkeypressButton = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onAddPost()
        }
    }
    return <div>
        <Typography variant="subtitle1" gutterBottom component="div">
        <div className={s.posts}>
            {postsElement}
        </div>
        </Typography>
        <div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Введите текст"
                    variant="outlined"
                    onKeyPress={onkeypressButton}
                    value={props.postProfile}
                    onChange={onPostChange}/>
            </div>
            <div>
                <Button onClick={onAddPost}>Add post</Button>
            </div>
        </div>
    </div>
}


