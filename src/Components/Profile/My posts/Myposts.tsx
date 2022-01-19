import React from "react";
import {Posts} from "./Posts/Posts";
import s from "./MyPosts.module.css";
import {Button} from "@mui/material";
import {AppRootStateType} from "../../../Redux/redax-store";
import {ProfileType} from "../../../Redux/Profile-reducer";
import {useSelector} from "react-redux";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../../Common/FormsControl/FormsControls";

type AddPostFormType = {
    myPosts: string;
};

type MyPostsType = {
    addPost: (myPosts: string) => void;
    onPostChangeContainer: (newText: string) => void;
};

export const maxLength10 = maxLengthCreator(10);

export const MyPosts = (props: MyPostsType) => {
    const profilePage = useSelector<AppRootStateType, ProfileType>(
        (state) => state.profileReducer
    );
    let postsElement = profilePage.MyPostsData.map((m) => (
        <Posts message={m.message} LikesCount={m.LikesCount}/>
    ));

    const addPost = (inputData: AddPostFormType) => {
        props.addPost(inputData.myPosts);
    };
    return (
        <div className={s.posts}>
            <div>{postsElement}</div>
            <AddPostFormRedux onSubmit={addPost}/>
        </div>
    );
};

export const MypostsForm: React.FC<InjectedFormProps<AddPostFormType>> = (
    props
) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        className={s.inputStyle}
                        component={Textarea}
                        name="myPosts"
                        placeholder="Enter your message"
                        validate={[required, maxLength10]}
                    />
                </div>
                <div>
                    <Button>Add post</Button>
                </div>
            </div>
        </form>
    );
};

const AddPostFormRedux = reduxForm<AddPostFormType>({
    form: "addPostForm",
})(MypostsForm);
