import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/redax-store";
import {sendMessageBodyAC} from "../../../Redux/Dialogs-reducer";
import {Dialogs} from "../Dialogs";
import {AuthType} from "../../../Redux/Auth-reducer";
import React from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


function DialogsContainer() {
    const dispatch = useDispatch();
    const isAuthLogin = useSelector<AppRootStateType, AuthType>(state => state.authReducer)

    const addChatContainer = (newMessageBody: string) => {
        dispatch(sendMessageBodyAC(newMessageBody));

    }
    return (
        <Dialogs
            isAuth={isAuthLogin.isAuth}
            addChatContainer={addChatContainer}
        />
    )
}

export default compose(
    withAuthRedirect
)(DialogsContainer)