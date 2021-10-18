export type stateType = {
    messagePage: messagePageType,
    ProfilePage: ProfilePageType,
    SideBar: Array<SideBarType>
}
export type ProfilePageType = {
    MyPostsData: Array<MyPostsData>
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
let state: stateType = {

    ProfilePage: {
        MyPostsData: [
            {id: 1, message: 'Hello my friend', LikesCount: '12'},
            {id: 2, message: 'This is my first post', LikesCount: '10'},
        ]
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
    SideBar: [
        {id: 1, name: "Andru"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Sveta"},
    ]
}

export default state;