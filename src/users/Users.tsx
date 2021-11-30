import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redax-store";
import {DialogsType, followAC, unFollowAC} from "../Redux/Users-reducer";
import s from "./Users.module.css"
import {Avatar, Button, Fab} from "@mui/material";
import Typography from '@mui/material/Typography'


const Users = () => {
    const dispatch = useDispatch();
    const usersSelector = useSelector<AppRootStateType, DialogsType>(state => state.usersReducer)
    return (
        <div>
            {
                usersSelector.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <Avatar alt="Travis Howard" src={u.pictureUrl} className={s.usersFoto}/>
                    </div>
                    <div>{u.followed ?
                        <Button variant="contained" size="small" onClick={() => {
                            dispatch(unFollowAC(u.id))
                        }}
                        >Unfollow</Button> :
                        <Button variant="contained" size="small" onClick={() => {
                            dispatch(followAC(u.id))
                        }}
                        >Follow</Button>}
                        </div>
                </span>
                        <span>
                            <Typography mt={2}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                                  </Typography>
                    <span>
                        <div>{}</div>
                    </span>
                </span>

                    </div>
                )
            }

        </div>
    )
}
export default Users;