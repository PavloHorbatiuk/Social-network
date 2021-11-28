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
        case "UPDATE_NEW_MESSAGE_BODY": {
            let stateCopy={...state}
            stateCopy.messagePage={...state.messagePage}
            stateCopy.newMessageBody = action.body;
            return {...stateCopy};
        }
        case "SEND_MESSAGE_BODY": {
            let stateCopy={...state}
            stateCopy.messagePage={...state.messagePage}
            let body = stateCopy.newMessageBody;
            stateCopy.messagePage.MessagesData.push({id: 4, message: body});
            stateCopy.newMessageBody="";
            return {...stateCopy};
        }
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
        body:body
    } as const
}

type SendMessageBodyCreatorActionCreatorType = ReturnType<typeof sendMessageBodyAC>
type updateNewMessageBodyCreatorActionCreatorType = ReturnType<typeof updateNewMessageBodyAC>


type ActionTypes =
    SendMessageBodyCreatorActionCreatorType
    | updateNewMessageBodyCreatorActionCreatorType
