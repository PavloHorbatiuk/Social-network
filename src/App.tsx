import React from 'react';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import s from './App.module.css';
import style from './Content.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, stateType, updateNewPostText} from "./Redux/State";
import {Dialogs} from './Components/Dialogs/Dialogs';
import {SideBarFriends} from "./Components/SideBarFriends/SideBarFriends";


export type AppPropsType = {
    state: stateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <div className={s.navbarwrappper}>
                    <Navbar state={props.state}/>
                    <SideBarFriends state={props.state}/>
                </div>
                <div className={style.content}>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.messagePage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.ProfilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
