import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redax-store";
import {DialogsType} from "../Redux/Users-reducer";
import Users from "./Users";


export const UsersContainer = () => {
    const dispatch = useDispatch();
    const uesersSelector = useSelector<AppRootStateType, DialogsType>(state=>state.usersReducer)
    return <div>
<Users/>
    </div>
}
export default UsersContainer;