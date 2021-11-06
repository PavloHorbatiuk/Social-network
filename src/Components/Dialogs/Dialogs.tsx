import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {
    senMessageBodyCreator,
    stateType,
    storeType, updateNewMessageBodyCreator
} from "../../Redux/State";
import {Box, Button} from "@mui/material";


const DialogsItems = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
type DialogsType = {
    store: storeType
    // getState: () => stateType


}

export const Dialogs = (props: DialogsType) => {
    let state = props.store.getState().messagePage.DialogsData;
    let DialogsElements = props.store._state.messagePage.DialogsData.map(d => <DialogsItems name={d.name} id={d.id}/>);
    let messagesElement = props.store._state.messagePage.MessagesData.map(m => <Message message={m.message}/>);
    let newMessaggeBody = props.store.getState().newMessageBody;
    const addChat = () => {
        props.store.dispatch(senMessageBodyCreator())
    }
    const onChangeNewBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget?.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <span>{DialogsElements}</span>
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessaggeBody} onChange={onChangeNewBody}></textarea></div>
                    <div><Button variant="contained" onClick={addChat}>Sent</Button></div>
                </div>
            </div>
        </div>
    )
}