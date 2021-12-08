import React from 'react'
import s from "./Users.module.css";
import dudeWithSuite from "../assets/images/dudeWithSuite.jpg";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {UserType} from "../Redux/Users-reducer";

export type PropsUsersPresentsTYpe = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


const Users = (props: PropsUsersPresentsTYpe) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selectedPageThin : s.selectedPageFat}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
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