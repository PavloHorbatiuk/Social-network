import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {Posts} from './Posts/Posts';
import s from './MyPosts.module.css';

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
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return <div>
        <div className={s.posts}>
            {PostsElement}
        </div>
        <div>
            <h2>{props.updateNewPostText}</h2>
            <div>
                <textarea value={props.newPostText} onChange={onPostChange}></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
        </div>
    </div>
}

function postText(postText: any) {
    throw new Error('Function not implemented.');
}

