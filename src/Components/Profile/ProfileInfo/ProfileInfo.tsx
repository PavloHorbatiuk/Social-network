import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader.sx";
import {getAxiosProfileType} from "../../../Redux/Profile-reducer";


type ProfileInfoType = {
    profile: null | getAxiosProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    debugger
    return (<div>
            <div className={s.ProfileInfo}>
                <img src='http://www.wpkixx.com/html/winku-dark/images/resources/timeline-1.jpg'/>
            </div>
            <div>
                <img className={s.img} src={props.profile.photos.small}/>
                <ul>
                    <h2>Contacts</h2>
                    <li><span>{props.profile.contacts.github}</span></li>
                    <li><span>{props.profile.contacts.facebook}</span></li>
                    <li><span>{props.profile.contacts.instagram}</span></li>
                </ul>
            </div>
        </div>
    )
}