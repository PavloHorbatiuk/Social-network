import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



export const DialogsItems = (props: any) => {
    let path = '/dialogs/' + props.id;
     const  Avatar = <img className={s.img} src={"https://themified.com/friend-finder/images/users/user-7.jpg"}/>
    return (
        <div className={s.dialog + '' + s.active}>
            <textarea>text</textarea>

            <NavLink to={path}>{Avatar}{props.name}</NavLink>

        </div>
    )
}

