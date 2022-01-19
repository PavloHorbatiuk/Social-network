import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import s from './App.module.css';
import style from './Content.module.css';
import { BrowserRouter, Route } from "react-router-dom";
import { SideBarFriends } from "./Components/SideBarFriends/SideBarFriends";
import UsersContainer from "./users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/Message/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


export type AppPropsType = {}

const App: React.FC<AppPropsType> = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <HeaderContainer />
                <div className={s.navbarwrappper}>
                    <Navbar />
                    <SideBarFriends />
                </div>
                <div className={style.content}>
                    <Route path='/Social-network' render={() => <ProfileContainer />} />
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />} />
                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer />} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/Login'
                        render={() => <Login />} />
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
