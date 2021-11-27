import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsType, sendMessageBodyAC, updateNewMessageBodyAC} from "../../Redux/Dialogs-reducer";
import {Button} from "@mui/material";
import {AppRootStateType} from "../../Redux/redax-store";
import {useDispatch, useSelector} from "react-redux";

const DialogsItems = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export const Dialogs = () => {
    const dispatch = useDispatch();
    const dialogsMessage = useSelector<AppRootStateType, DialogsType>(state => state.dialogsReducer)

    let DialogsElements = dialogsMessage.messagePage.DialogsData.map(d => <DialogsItems name={d.name}
                                                                                        id={d.id}/>);
    let messagesElement = dialogsMessage.messagePage.MessagesData.map(m => <Message message={m.message}/>);
    let newMessageBody = dialogsMessage.newMessageBody;
    const addChat = () => {
        dispatch(sendMessageBodyAC());

    }
    const onChangeNewBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let body = e.currentTarget.value
        dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <span>{DialogsElements}</span>
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onChangeNewBody}/></div>
                    <div><Button variant="contained" onClick={addChat}>Sent</Button></div>
                </div>
            </div>
        </div>
    )
}