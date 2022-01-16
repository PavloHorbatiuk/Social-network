import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Posts} from './Posts/Posts';
import s from './MyPosts.module.css';
import {Button} from "@mui/material";
import {AppRootStateType} from "../../../Redux/redax-store";
import {ProfileType} from "../../../Redux/Profile-reducer";
import {useSelector} from "react-redux";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AddmessageFormType} from "../../Dialogs/Dialogs";


type AddPostFormType = {
    myPosts: string
}

type MyPostsType = {
    addPost: (myPosts: string) => void
    onPostChangeContainer: (newText: string) => void
}


export const MyPosts = (props: MyPostsType) => {
    const profilePage = useSelector<AppRootStateType, ProfileType>(state => state.profileReducer)
    let postsElement = profilePage.MyPostsData.map(m => <Posts message={m.message}
                                                               LikesCount={m.LikesCount}/>)

    const addPost = (inputData: AddPostFormType) => {
        props.addPost(inputData.myPosts)
    }
    return (
        <div className={s.posts}>
            <div>
                {postsElement}
            </div>
            <AddPostFormRedux onSubmit={addPost}/>
        </div>
    )
}

export const MypostsForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div><Field
                    className={s.inputStyle}
                    component='input'
                    name='myPosts'
                    placeholder="Enter your message"
                />
                </div>
                <div>
                    <Button>Add post</Button>
                </div>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<AddPostFormType>({
    form: 'addPostForm'
})(MypostsForm)