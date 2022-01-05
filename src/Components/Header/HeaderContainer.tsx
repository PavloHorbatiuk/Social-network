import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {AuthType, getUserData, setUserDataAC} from "../../Redux/Auth-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../Redux/redax-store";
import {authAPI} from "../../API/API";
import {getElementError} from "@testing-library/react";


type maDispatchType = {
    // setUserDataAC: (id: null,
    //                 email: null,
    //                 login: null) => void
    getUserData:()=>void
};
type mapStateToPropsType = {
    isAuth: boolean,
    Login: null | string
}
export type HeaderContainerType = maDispatchType & mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, AuthType> {
    componentDidMount() {

        this.props.getUserData()
    }

    render() {
        return <Header
            {...this.props}
        />
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): maDispatchType => {
//     return {
//         setUserDataAC: (id, email, login) => {
//             dispatch(setUserDataAC(id, email, login))
//         }
//     }
//     }
// }

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        Login: state.authReducer.login
    }
}


export default connect(mapStateToProps,{getUserData} )(HeaderContainer)