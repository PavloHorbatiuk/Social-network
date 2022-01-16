import React from 'react';
import s from './../Dialogs.module.css'


type MessagePropsType = {
    message: string
}


export const Message = (props: MessagePropsType) => {
    const Avatar = <img className={s.img} src={"https://themified.com/friend-finder/images/users/user-7.jpg"} alt="avatar" />
    return (
        <div className={s.dialog}>{Avatar}{props.message}</div>
    )
}

