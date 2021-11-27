export type DialogsType = typeof initialState
let initialState = {
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
};


export const dialogsReducer = (state: DialogsType = initialState, action: ActionTypes): typeof initialState => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.body;
            return {...state};
        case "SEND_MESSAGE_BODY":
            let body = state.newMessageBody;
            state.messagePage.MessagesData.push({id: 4, message: body});
            state.newMessageBody="";
            return {...state};
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
        body
    } as const
}

type SendMessageBodyCreatorActionCreatorType = ReturnType<typeof sendMessageBodyAC>
type updateNewMessageBodyCreatorActionCreatorType = ReturnType<typeof updateNewMessageBodyAC>


type ActionTypes =
    SendMessageBodyCreatorActionCreatorType
    | updateNewMessageBodyCreatorActionCreatorType
