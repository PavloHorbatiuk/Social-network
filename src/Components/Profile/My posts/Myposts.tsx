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
    addPost: (text: string| undefined) => void

}

export const MyPosts = (props: MyPostsType) => {

    let addPost = () => {
        let text = () => newPostElement.current?.value;
       props.addPost(text())
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

