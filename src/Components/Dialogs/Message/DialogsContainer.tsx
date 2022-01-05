import { useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../../../Redux/redax-store";
import {DialogsType, sendMessageBodyAC, updateNewMessageBodyAC} from "../../../Redux/Dialogs-reducer";
import {Dialogs} from "../Dialogs";
import  {AuthType} from "../../../Redux/Auth-reducer";
import React from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";



function DialogsContainer  () {
    const dispatch = useDispatch();
    const dialogsMessage = useSelector<AppRootStateType, DialogsType>(state => state.dialogsReducer)
    const isAuthLogin = useSelector<AppRootStateType, AuthType>(state => state.authReducer)

    const addChatContainer = () => {
        dispatch(sendMessageBodyAC());

    }
    const onNewChangeNewBody = (body:string) => {
        dispatch(updateNewMessageBodyAC(body));
    }
    return (
        <Dialogs
            isAuth={isAuthLogin.isAuth}
            onNewChangeNewBody={onNewChangeNewBody}
            addChatContainer={addChatContainer}

        />
            )
}
export default withAuthRedirect( DialogsContainer)