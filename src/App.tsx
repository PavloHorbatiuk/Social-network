import React from 'react';
import {Navbar} from './Components/Navbar/Navbar';
import s from './App.module.css';
import style from './Content.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import {SideBarFriends} from "./Components/SideBarFriends/SideBarFriends";
import {DialogsContainer} from "./Components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";



export type AppPropsType = {}

const App: React.FC<AppPropsType> = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <div className={s.navbarwrappper}>
                    <Navbar/>
                    <SideBarFriends/>
                </div>
                <div className={style.content}>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
