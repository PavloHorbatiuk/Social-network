import React from 'react';
import {Posts} from './Posts/Posts';
import s from './MyPosts.module.css';

type MyPostsDataType = {
    id: number,
    message: string,
    LikesCount: string
}
type MyPostsType = {
    MyPostsData: Array<MyPostsDataType>
    addPostCallBack: (postText: string) => void
}


export const MyPosts = (props: MyPostsType) => {
    let PostsElement = props.MyPostsData.map(m => <Posts message={m.message} LikesCount={m.LikesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
            props.addPostCallBack(newPostElement.current.value)
            newPostElement.current.value = ""
        }
    };
    return <div>
        <div>
            <h2> My posts</h2>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {PostsElement}
        </div>
    </div>
}

function postText(postText: any) {
    throw new Error('Function not implemented.');
}

