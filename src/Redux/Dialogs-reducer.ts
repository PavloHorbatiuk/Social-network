export type DialogsType = typeof initialState
export const initialState = {
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
    newMessageBody: '',
};


export const dialogsReducer = (state: DialogsType = initialState, action: ActionTypes): typeof initialState => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            return {
                ...state,
                newMessageBody: action.body
            };
        case "SEND_MESSAGE_BODY":
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                MessagesData: [...state.MessagesData, {id: 6, message: body}]
            };
        default:
            return state;
    }
}
export const sendMessageBodyAC = () => {
    return {
        type: "SEND_MESSAGE_BODY"
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        body: body
    } as const
}

type SendMessageBodyCreatorActionCreatorType = ReturnType<typeof sendMessageBodyAC>
type updateNewMessageBodyCreatorActionCreatorType = ReturnType<typeof updateNewMessageBodyAC>


type ActionTypes =
    SendMessageBodyCreatorActionCreatorType
    | updateNewMessageBodyCreatorActionCreatorType
