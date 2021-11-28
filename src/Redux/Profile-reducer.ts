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

export const profileReducer = (state: ProfileType = initialState, action: ActionTypes): typeof initialState => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date().getTime(),
                message: state.ProfilePage.postProfile,
                LikesCount: "0"
            }
            let stateCopy = {...state};
            stateCopy.ProfilePage= {...state.ProfilePage}
            stateCopy.ProfilePage.MyPostsData.push(newPost);
            stateCopy.ProfilePage.postProfile = ("");
            return {...stateCopy};
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.ProfilePage.postProfile = action.newText;
            return {...state};
        }
        default:
            return state;
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
    type ActionTypes = AddPostActionCreatorType | OnPostChangeActionCreatorType;


