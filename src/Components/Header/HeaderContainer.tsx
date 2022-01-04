import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {AuthType, setUserDataAC} from "../../Redux/Auth-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../Redux/redax-store";
import {authAPI} from "../../API/API";


type maDispatchType = {
    setUserDataAC: (id: null,
                    email: null,
                    login: null) => void
};
type mapStateToPropsType = {
    isAuth: boolean,
    Login: null | string
}
export type HeaderContainerType = maDispatchType & mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, AuthType> {
    componentDidMount() {

        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                this.props.setUserDataAC(response.data.data.id, response.data.data.login,
                    response.data.data.email)
            }
        })
    }

    render() {
        return <Header
            {...this.props}
        />
    }
}

let mapDispatchToProps = (dispatch: Dispatch): maDispatchType => {
    return {
        setUserDataAC: (id, email, login) => {
            dispatch(setUserDataAC(id, email, login))
        }
    }
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        Login: state.authReducer.login
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)