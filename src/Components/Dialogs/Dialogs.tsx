import React, {ChangeEvent, KeyboardEvent} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Button, TextField} from "@mui/material";
import {AppRootStateType} from "../../Redux/redax-store";
import {useSelector} from "react-redux";
import {DialogsType} from "../../Redux/Dialogs-reducer";

type dialogsType = {
    addChatContainer: () => void
    onNewChangeNewBody: (body: string) => void
    isAuth: boolean
}
const DialogsItems = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export const Dialogs = (props: dialogsType) => {
    const dialogsMessage = useSelector<AppRootStateType, DialogsType>(state => state.dialogsReducer)
    let DialogsElements = dialogsMessage.DialogsData.map(d => <DialogsItems name={d.name}
                                                                            id={d.id}/>);
    let messagesElement = dialogsMessage.MessagesData.map(m => <Message message={m.message}/>);

    const addChat = () => {
        props.addChatContainer()
    }
    const sendMButton = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addChat();
        }
    }
    const onChangeNewBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let body = e.currentTarget.value
        props.onNewChangeNewBody(body)

    }
    if (!props.isAuth ) return<Redirect to={"/Login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <span>{DialogsElements}</span>
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><TextField
                        id="outlined-basic"
                        label="Введите текст"
                        variant="outlined"
                        onKeyPress={sendMButton}
                        value={dialogsMessage.newMessageBody}
                        onChange={onChangeNewBody}/></div>
                    <div><Button variant="contained" onClick={addChat}>Sent</Button></div>
                </div>
            </div>
        </div>
    )
}