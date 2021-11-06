const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MEWSSAGE_BODY = "UPDATE_NEW_MEWSSAGE_BODY ";
const SEND_MESSAGE_BODY = "SEND_MESSAGE_BODY";

export type stateType = {
    messagePage: messagePageType,
    ProfilePage: ProfilePageType,
    SideBar: Array<SideBarType>
    newMessageBody: string
}
export type ProfilePageType = {
    MyPostsData: Array<MyPostsData>,
    newPostText: string,

}
type MyPostsData = {
    id: number,
    message: string,
    LikesCount: string
}
export type messagePageType = {
    MessagesData: Array<MessagesDataType>,
    DialogsData: Array<DialogsDataType>,
}
export type DialogsDataType = {
    id: number,
    name: string

}
export type SideBarType = {
    id: number,
    name: string
}
export type MessagesDataType = {
    id: string | number,
    message: string,

}
export type DialogsItemsType = {
    DialogsData: DialogsDataType
}
export type storeType = {
    _state: stateType,
    getState: () => stateType
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: DispatchAcType) => void
}
export type AddpostACType = {
    type: 'ADD-POST'
    newPostText: string
}
export type ChangeNewPostACType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateMessageBodyACType={
    type:"UPDATE_NEW_MEWSSAGE_BODY"
    body:string
}
export type SendMessageBodyACType={
    type:"SEND_MESSAGE_BODY",

}
export type DispatchAcType = AddpostACType | ChangeNewPostACType|UpdateMessageBodyACType|SendMessageBodyACType

const store: storeType = {
    _state: {
        ProfilePage: {
            MyPostsData: [
                {id: 1, message: 'Hello my friend', LikesCount: '12'},
                {id: 2, message: 'This is my first post', LikesCount: '10'},
                {id: 2, message: 'DaDa', LikesCount: '10'},
            ],
            newPostText: "Введите текст",
        },
        messagePage: {
            DialogsData: [
                {id: 1, name: 'Pall'},
                {id: 2, name: 'Artur'},
                {id: 3, name: 'Valeri'},
                {id: 4, name: 'Nikol'},
                {id: 5, name: 'Bond'},
                {id: 6, name: 'Petrovich'},
            ],
            MessagesData: [
                {id: 1, message: 'hello'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
            ],
        },
        newMessageBody: '',
        SideBar: [
            {id: 1, name: "Andru"},
            {id: 2, name: "Sasha"},
            {id: 3, name: "Sveta"},
        ]
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: new Date().getTime(),
                message: this._state.ProfilePage.newPostText,
                LikesCount: "0"
            }
            this._state.ProfilePage.MyPostsData.push(newPost);
            this._state.ProfilePage.newPostText = ("");
            this.rerenderEntireTree();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.ProfilePage.newPostText = action.newText;
            this.rerenderEntireTree();
        } else if(action.type==="UPDATE_NEW_MEWSSAGE_BODY"){
            this._state.newMessageBody=action.body;
            this.rerenderEntireTree()
        }else if (action.type==="SEND_MESSAGE_BODY"){
            let body= this._state.newMessageBody=('');
            this._state.messagePage.MessagesData.push({id: 4, message: body});
            this.rerenderEntireTree()
        }
    },
    rerenderEntireTree() {
        console.log("satate changed")
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
}
export const senMessageBodyCreator=():SendMessageBodyACType=>{
    return {
        type: "SEND_MESSAGE_BODY"
    }
}
export const updateNewMessageBodyCreator=(body:string):UpdateMessageBodyACType=>{
    return {
        type:"UPDATE_NEW_MEWSSAGE_BODY",
        body:body
    }
}
export const addPostActionCreator = (newPostText: string): AddpostACType => {
    return {
    type: ADD_POST,
    newPostText: newPostText
    }
}

export const onPostChangeActionCreator = (newText: string): ChangeNewPostACType => {

    return {
        type: UPDATE_NEW_POST,
        newText: newText
    }
}
export default store;
