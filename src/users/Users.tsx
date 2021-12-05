import React from 'react';
import s from "./Users.module.css"
import Typography from '@mui/material/Typography'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import dudeWithSuite from '../assets/images/dudeWithSuite.jpg'
import {Button} from "@mui/material";


export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            props.setUsers(response.data.items)

        })

    }
    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.Small != null ? u.photos.Small : dudeWithSuite}
                             className={s.usersFoto}/>
                    </div>
                    <div>{u.followed ?
                        <Button variant="contained" size="small" onClick={() => {
                            props.unfollow(u.id)
                        }}
                        >Unfollow</Button> :
                        <Button variant="contained" size="small" onClick={() => {
                            props.follow(u.id)
                        }}
                        >Follow</Button>}
                        </div>
                </span>
                        <span>
                            <Typography mt={2}>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
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