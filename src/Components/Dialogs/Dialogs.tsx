import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {messagePageType} from "../../Redux/State";


const DialogsItems = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

export const Dialogs = (props: { state: messagePageType }) => {
    let DialogsElements = props.state.DialogsData.map(d => <DialogsItems name={d.name} id={d.id}/>);
    let messagesElement = props.state.MessagesData.map(m => <Message message={m.message}/>)
    const addChat=()=>{
        let tex=()=> newPostElement.current?.value;
        alert(tex())
 }
    let newPostElement= React.createRef<HTMLTextAreaElement>();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <span>{DialogsElements}</span>
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={newPostElement}></textarea><button onClick={addChat}>Sent</button>
            </div>
        </div>
    )
}