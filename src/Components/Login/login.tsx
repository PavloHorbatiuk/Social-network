import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Login.module.css"

type LoginFormType = {
    Login: string;
    password: string;
    rememberMe: boolean;
}
export let LoginForm: React.FC<InjectedFormProps<LoginFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.input} placeholder={'Login'} name={"Login"} component={'input'}/>
            </div>
            <div>
                <Field className={s.input} placeholder={"Password"} name={"password"} component={'input'}/>
            </div>
            <div>
                <Field className={s.input} component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'Login'
})(LoginForm)


const Login = () => {
    const onSubmit = (formData: LoginFormType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1> Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
            />
        </div>
    )
}
export default Login;
