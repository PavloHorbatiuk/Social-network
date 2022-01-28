import { AddmessageFormType } from "../Components/Dialogs/Dialogs";

export type DialogsType = typeof initialState
export const initialState = {
    DialogsData: [
        { id: 1, name: 'Pall' },
        { id: 2, name: 'Artur' },
        { id: 3, name: 'Valeri' },
        { id: 4, name: 'Nikol' },
        { id: 5, name: 'Bond' },
        { id: 6, name: 'Petrovich' },
    ],
    MessagesData: [
        { id: 1, message: 'hello' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo' },
    ],
};


export const dialogsReducer = (state: DialogsType = initialState, action: ActionTypes): typeof initialState => {
    switch (action.type) {
        case "SEND_MESSAGE_BODY":
            let body = action.newMessageBody
            return {
                ...state,
                MessagesData: [...state.MessagesData, { id: 6, message: body }]
            };
        default:
            return state;
    }
}
export const sendMessageBodyAC = (newMessageBody: string) => {
    return {
        type: "SEND_MESSAGE_BODY",
        newMessageBody: newMessageBody

    } as const
}

type SendMessageBodyCreatorActionCreatorType = ReturnType<typeof sendMessageBodyAC>


type ActionTypes = SendMessageBodyCreatorActionCreatorType

