import React from 'react';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import s from './App.module.css';
import style from './Content.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import {DispatchAcType, storeType} from "./Redux/State";
import {Dialogs} from './Components/Dialogs/Dialogs';
import {SideBarFriends} from "./Components/SideBarFriends/SideBarFriends";


export type AppPropsType = {
    store: storeType
    dispatch: (action: DispatchAcType) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <div className={s.navbarwrappper}>
                    <Navbar state={props.store._state}/>
                    <SideBarFriends state={props.store._state}/>
                </div>
                <div className={style.content}>
                    <Route path='/dialogs' render={() => <Dialogs state={props.store._state.messagePage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.store._state.ProfilePage}
                                                                  dispatch={props.dispatch}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
