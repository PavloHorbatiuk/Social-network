import React from 'react';
import {Header} from "./Header";
import {AuthType, getUserData, LogOut} from "../../Redux/Auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redax-store";


type maDispatchType = {
    getUserData: () => void
    LogOut: () => void
};
type mapStateToPropsType = {
    isAuth: boolean,
    Login: null | string
}
export type HeaderContainerType = maDispatchType & mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, AuthType> {
    componentDidMount() {
        // this.props.getUserData()
    }

    render() {
        return <Header
            {...this.props}
        />
    }
}


let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        Login: state.authReducer.login
    }
}


export default connect(mapStateToProps, {getUserData, LogOut})(HeaderContainer)