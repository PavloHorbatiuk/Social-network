import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControls";
import {required} from "../utils/validators";
import s from "./Login.module.css";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../Redux/redax-store";
import {login} from "../../Redux/Auth-reducer";

type LoginFormType = {
    email: string;
    password: string;
    rememberMe: false;
};

type mastateToPropsType = {
    isAuth: boolean
}
export let LoginForm: React.FC<InjectedFormProps<LoginFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required]}
                    className={s.input}
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    validate={[required]}
                    className={s.input}
                    placeholder={"Password"}
                    name={"password"}
                    component={Input}
                    type={"password"}
                />
            </div>
            <div>
                <Field
                    className={s.input}
                    component={Input}
                    name={"rememberMe"}
                    type={"checkbox"}
                />{" "}
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormType>({form: "Login"})(LoginForm);

type loginType = {
    login: (email: string, password: string, rememberMe: false) => void;
    isAuth: boolean
};

const Login = (props: loginType) => {
    const onSubmit = (formData: LoginFormType) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to='/Profile'/>
    }
    return (
        <div>
            <h1> Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateTpProps = (state: AppRootStateType): mastateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}


export default connect(mapStateTpProps, {login: login})(Login);
