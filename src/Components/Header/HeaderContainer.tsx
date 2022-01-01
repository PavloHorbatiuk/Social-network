import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


export const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://themified.com/friend-finder/images/logo.png'/>
            <div className={s.login_block}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}