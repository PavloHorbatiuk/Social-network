import React from 'react';
import {MyPosts} from "../Myposts";
import {
    addPostActionCreator,
    onPostChangeActionCreator,
} from "../../../../Redux/Profile-reducer";
import { useDispatch} from "react-redux";



const MyPostsContainer = () => {
    const dispatch = useDispatch();
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
            />
        </div>
    )
}


export default MyPostsContainer