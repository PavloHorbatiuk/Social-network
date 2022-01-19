import React from "react";
import s from "./Post.module.css";

type MyPostsType = {
  message: string;
  LikesCount: string;
};

export const Posts: React.FC<MyPostsType> = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
        alt="userPicture"
      />

      {props.message}

      <div>{props.LikesCount}</div>
    </div>
  );
};
