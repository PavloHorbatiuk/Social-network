const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
type StateType = {
// type ProfileAction type = ReturnTYpe<typeof a

 const profileReducer=(state, action)=>{
    if (action.type === ADD_POST) {
        let newPost = {
            id: new Date().getTime(),
            message: state.ProfilePage.newPostText,
            LikesCount: "0"
        }
        state.MyPostsData.push(newPost);
        state.ProfilePage.newPostText = ("");
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;

    return state;
}

export default profileReducer