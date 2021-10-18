import React from 'react';
import { MyPosts } from './My posts/Myposts';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../Redux/State";




export const Profile = (props: {state: ProfilePageType }) => {

  return (
    <div>
      <ProfileInfo />
      <div>
        <MyPosts MyPostsData={props.state.MyPostsData} />
      </div>
    </div>


  )
}