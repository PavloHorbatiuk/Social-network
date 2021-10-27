import React from 'react';
import {Posts} from './Posts/Posts';
import s from './MyPosts.module.css';
import {listenerCount} from 'process';
import {type} from 'os';

type MyPostsDataType = {
    id: number,
    message: string,
    LikesCount: string

}

type MyPostsType = {
    MyPostsData: Array<MyPostsDataType>
    addPost:(text:string)=>void
}

export const MyPosts = (props: MyPostsType) => {
    let onClickForButton = () => {
        let text=()=> newPostElement.current?.value
        alert(text())
    };
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let PostsElement = props.MyPostsData.map(m => <Posts message={m.message} LikesCount={m.LikesCount}/>)
    return <div>
        <div>
            <h2> My posts</h2>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={onClickForButton}>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {PostsElement}
        </div>
    </div>
}

