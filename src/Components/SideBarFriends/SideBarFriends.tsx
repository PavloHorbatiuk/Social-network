import React from 'react';
import s from "./SIdebarFriends.module.css";
import {NavLink} from "react-router-dom";
import {AppRootStateType} from "../../Redux/redax-store";
import {useSelector} from "react-redux";
import {ProfileType} from "../../Redux/Profile-reducer";
import {SideType} from "../../Redux/sidebar-reducer";


type SideBarFriendsType = {
}
const FriendsItem = (props: any) => {
    let path = '/profile/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export const SideBarFriends = () => {
    const profilePage = useSelector<AppRootStateType, SideType>(state => state.sidebarReducer)
    const bigFriends = profilePage.SideBar.map(s => <FriendsItem name={s.name} id={s.id}/>)
    return (
        <nav className={s.sideBar}>

            <div className={s.content}>
                Friends online
                <NavLink to="/friends" activeClassName={s.active}>{bigFriends}</NavLink>
            </div>
        </nav>
    )
}