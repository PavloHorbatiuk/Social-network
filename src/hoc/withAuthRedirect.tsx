import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redax-store";

type mapStateToPropsType={
    isAuth:boolean
}
const mapStateToProps=(state:AppRootStateType):mapStateToPropsType=>{
    return{
        isAuth: state.authReducer.isAuth
    }
}
export function withAuthRedirect<T>(Component:ComponentType<T>){
    const RedirectComponent=(props:mapStateToPropsType)=>{
        let {isAuth, ...restProps}=props
        if (!props.isAuth) return <Redirect to={"/Login"}/>
        return<Component {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}