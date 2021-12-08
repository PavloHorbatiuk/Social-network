import React from 'react';
import s from "./Users.module.css"
import Typography from '@mui/material/Typography'
import axios from "axios";
import dudeWithSuite from '../assets/images/dudeWithSuite.jpg'
import {Button} from "@mui/material";
import {UsersPropsType} from "./UsersContainer";
import {InitialStateType} from "../Redux/Users-reducer";


class UsersAPIComponent extends React.Component<UsersPropsType, InitialStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber:number) => {
                  this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <Users/>  <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={this.props.currentPage === p ? s.selectedPageThin : s.selectedPageFat}
                        onClick={(e)=> {
                            this.onPageChanged(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.Small != null ? u.photos.Small : dudeWithSuite}
                             className={s.usersFoto}/>
                    </div>
                    <div>{u.followed ?
                        <Button variant="contained" size="small" onClick={() => {
                            this.props.unfollow(u.id)
                        }}
                        >Unfollow</Button> :
                        <Button variant="contained" size="small" onClick={() => {
                            this.props.follow(u.id)
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
    }
}

export default UsersAPIComponent;

