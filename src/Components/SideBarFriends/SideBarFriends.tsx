import React from 'react';
import {stateType} from "../../Redux/State";
import s from "../Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";


type SideBarFriendsType = {
    state: stateType
}
const FriendsItem = (props: any) => {
    let path = '/profile/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export const SideBarFriends = (props: SideBarFriendsType) => {
    const bigFriends = props.state.SideBar.map(s => <FriendsItem name={s.name} id={s.id}/>)
    return (
        <nav className={s.sideBar}>

            <div>
                pasha
                <NavLink to="/friends" activeClassName={s.active}>{bigFriends}</NavLink>
            </div>
        </nav>
    )
}