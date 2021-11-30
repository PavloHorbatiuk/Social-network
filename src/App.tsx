import React from 'react';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import s from './App.module.css';
import style from './Content.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import {SideBarFriends} from "./Components/SideBarFriends/SideBarFriends";
import {DialogsContainer} from "./Components/Dialogs/Message/DialogsContainer";
import Users from "./users/Users";
import UsersContainer from "./users/UsersContainer";


export type AppPropsType = {}

const App: React.FC<AppPropsType> = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <div className={s.navbarwrappper}>
                    <Navbar/>
                    <SideBarFriends/>
                </div>
                <div className={style.content}>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/users'
                           render={() => <Users/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
