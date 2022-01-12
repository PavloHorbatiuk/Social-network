import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader.sx";
import {getAxiosProfileType} from "../../../Redux/Profile-reducer";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoType = {
    profile: null | getAxiosProfileType
    status:string
    updateStatus:(status:string)=>void

}

export function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    // if(!props.status){
    //     return<Preloader/>
    // }

    return (<div>
            <div className={s.ProfileInfo}>
                <img src='http://www.wpkixx.com/html/winku-dark/images/resources/timeline-1.jpg' alt="headerPicture"/>
            </div>
            <div>
                <img className={s.img} src={props.profile.photos.small} alt="ProfileFoto"/>
                <ul>
                    <h2>Contacts</h2>
                    <li><span>{props.profile.contacts.github}</span></li>
                    <li><span>{props.profile.contacts.facebook}</span></li>
                    <li><span>{props.profile.contacts.instagram}</span></li>
                    <ProfileStatus status={props.status}/>
                </ul>
            </div>
        </div>
    )
}