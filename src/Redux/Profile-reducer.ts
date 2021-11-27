export type AddpostACType = {
    type: 'ADD-POST'
}
export type ChangeNewPostACType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export type ProfileType = typeof initialState
let initialState = {
    ProfilePage: {
        MyPostsData: [
            {id: 1, message: 'Hello my friend', LikesCount: '12'},
            {id: 2, message: 'This is my first post', LikesCount: '10'},
            {id: 2, message: 'DaDa', LikesCount: '10'},
        ],
        postProfile: "",
    },
};

export const profileReducer = (state:ProfileType =initialState, action: ActyionTypes): typeof initialState => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: new Date().getTime(),
                message: state.ProfilePage.postProfile,
                LikesCount: "0"
            }
            state.ProfilePage.MyPostsData.push(newPost);
            state.ProfilePage.postProfile = ("");
            return {...state};
        case UPDATE_NEW_POST_TEXT:
            state.ProfilePage.postProfile = action.newText;
            return {...state};
        default:
            return state
    }
}
export const addPostActionCreator = (): AddpostACType => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreator = (newText: string): ChangeNewPostACType => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } 
}
type  AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type OnPostChangeActionCreatorType = ReturnType<typeof onPostChangeActionCreator>
type ActyionTypes = AddPostActionCreatorType | OnPostChangeActionCreatorType


