import React from 'react';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import s from './App.module.css';
import style from './Content.module.css';
import { BrowserRouter, Route } from "react-router-dom";
import { SideBarFriends } from "./Components/SideBarFriends/SideBarFriends";
import {DialogsContainer} from "./Components/Dialogs/Message/DialogsContainer";


export type AppPropsType = {
   
}

const App: React.FC<AppPropsType> = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header />
                <div className={s.navbarwrappper}>
                    <Navbar />
                    <SideBarFriends />
                </div>
                <div className={style.content}>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer  />} />
                    <Route path='/profile' render={() => <Profile />} />
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
