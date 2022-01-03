import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {DataType} from "../../Redux/Auth-reducer";


type HeaderType = {
    isAuth: boolean,
    Login: string|null
}
export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img src='https://themified.com/friend-finder/images/logo.png'/>
            <div className={s.login_block}>
                {props.isAuth ? props.Login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}