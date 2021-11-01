import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import {Avatar} from "@mui/material";



export const DialogsItems = (props: any) => {
    let path = '/dialogs/' + props.id;
     const  avatar = <Avatar alt="Remy Sharp" className={s.img} src={"https://themified.com/friend-finder/images/users/user-7.jpg"}/>
    return (
        <div className={s.dialog + '' + s.active}>
            <textarea>------</textarea>
            <NavLink to={path}>{avatar}{props.name}</NavLink>
        </div>
    )
}

