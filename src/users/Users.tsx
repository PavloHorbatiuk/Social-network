import React from 'react'
import s from "./Users.module.css";
import dudeWithSuite from "../assets/images/dudeWithSuite.jpg";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FollowingType, UserType } from "../Redux/Users-reducer";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { log } from "util";

export type PropsUsersPresentsTYpe = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgres: Array<FollowingType>
}


const Users = (props: PropsUsersPresentsTYpe) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props.currentPage)
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
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : dudeWithSuite}
                                    className={s.usersFoto} />
                            </NavLink>
                        </div>
                        <div>{u.followed ?
                            <Button variant="contained" size="small"
                                disabled={props.followingInProgres.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</Button> :
                            <Button variant="contained" size="small"
                                disabled={props.followingInProgres.some(id => id === u.id)} onClick={() => {
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
                            <div>{u.id}</div>
                        </span>
                    </span>

                </div>
                )
            }

        </div>
    )
}

export default Users;