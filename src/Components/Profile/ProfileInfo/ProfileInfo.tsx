import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader.sx";
import {getAxiosProfileType} from "../../../Redux/Profile-reducer";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatuswirhHooks";

type ProfileInfoType = {
    profile: null | getAxiosProfileType;
    status: string;
    updateStatus: (status: string) => void;
};

export function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div className={s.ProfileStyle}>
            <div className={s.ProfileInfo}></div>
            <div>
                <img
                    className={s.img}
                    src={props.profile.photos.small}
                    alt="ProfileFoto"
                />
                <ul>
                    <h2>Contacts</h2>
                    <li>
                        <span>{props.profile.contacts.github}</span>
                    </li>
                    <li>
                        <span>{props.profile.contacts.facebook}</span>
                    </li>
                    <li>
                        <span>{props.profile.contacts.instagram}</span>
                    </li>
                    <ProfileStatusWithHooks
                        updateStatus={props.updateStatus}
                        status={props.status}
                    />
                </ul>
            </div>
        </div>
    );
}
