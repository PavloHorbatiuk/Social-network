// import profileReducer from "./Profile-reducer";
// import {dialogsReducer} from "./Dialogs-reducer";
//
// export type stateType = {
//     messagePage: messagePageType,
//     ProfilePage: ProfilePageType,
//     SideBar: Array<SideBarType>
//     newMessageBody: string
// }
// export type ProfilePageType = {
//     MyPostsData: Array<MyPostsData>,
//     newPostText: string,
//
// }
// export type MyPostsData = {
//     id: number,
//     message: string,
//     LikesCount: string
// }
// export type messagePageType = {
//     MessagesData: Array<MessagesDataType>,
//     DialogsData: Array<DialogsDataType>,
// }
// export type DialogsDataType = {
//     id: number,
//     name: string
//
// }
// export type SideBarType = {
//     id: number,
//     name: string
// }
// export type MessagesDataType = {
//     id: string | number,
//     message: string,
//
// }
// export type DialogsItemsType = {
//     DialogsData: DialogsDataType
// }
// export type storeType = {
//     _state: stateType,
//     getState: () => stateType
//     rerenderEntireTree: () => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: DispatchAcType) => void
// }
//
//
// export type UpdateMessageBodyACType={
//     type:"UPDATE_NEW_MEWSSAGE_BODY"
//     body:string
// }
// export type SendMessageBodyACType={
//     type:"SEND_MESSAGE_BODY",
//
// }
// export type DispatchAcType = AddpostACType | ChangeNewPostACType|UpdateMessageBodyACType|SendMessageBodyACType
//
//
// const store: storeType = {
//     _state: {
//         ProfilePage: {
//             MyPostsData: [
//                 {id: 1, message: 'Hello my friend', LikesCount: '12'},
//                 {id: 2, message: 'This is my first post', LikesCount: '10'},
//                 {id: 2, message: 'DaDa', LikesCount: '10'},
//             ],
//             newPostText: "Введите текст",
//         },
//         messagePage: {
//             DialogsData: [
//                 {id: 1, name: 'Pall'},
//                 {id: 2, name: 'Artur'},
//                 {id: 3, name: 'Valeri'},
//                 {id: 4, name: 'Nikol'},
//                 {id: 5, name: 'Bond'},
//                 {id: 6, name: 'Petrovich'},
//             ],
//             MessagesData: [
//                 {id: 1, message: 'hello'},
//                 {id: 2, message: 'How are you'},
//                 {id: 3, message: 'Yo'},
//             ],
//         },
//         newMessageBody: '',
//
//         ]
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.ProfilePage=profileReducer(this._state.ProfilePage.MyPostsData,action);
//         this._state.messagePage=dialogsReducer(this._state.messagePage.MessagesData,action);
//         // this._state.SideBar=sidebarReducer(this._state.SideBar,action);
//       this.rerenderEntireTree();
//     },
//     rerenderEntireTree() {
//         console.log("satate changed")
//     },
//     subscribe(observer) {
//         this.rerenderEntireTree = observer;
//     },
// }
//
//
// export default store;
export default {}