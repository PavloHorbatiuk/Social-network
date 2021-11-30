import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/redax-store";
import {DialogsType, sendMessageBodyAC, updateNewMessageBodyAC} from "../../../Redux/Dialogs-reducer";
import {Dialogs} from "../Dialogs";



export const DialogsContainer = () => {
    const dispatch = useDispatch();
    const dialogsMessage = useSelector<AppRootStateType, DialogsType>(state => state.dialogsReducer)

    const addChatContainer = () => {
        dispatch(sendMessageBodyAC());

    }
    const onNewChangeNewBody = (body:string) => {
        debugger
        dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <Dialogs
            onNewChangeNewBody={onNewChangeNewBody}
            addChatContainer={addChatContainer}

        />
            )
}