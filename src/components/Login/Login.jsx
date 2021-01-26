    import React from "react";
    import {reduxForm} from "redux-form";
    import {CreateField, Input} from "../Common/FormsControls/FormsControls";
    import {maxLength10, required} from "../../utility/validation/validators";
    import {connect} from "react-redux";
    import {login, logOut} from "../../Redux/AuthReducer";
    import {Redirect} from "react-router-dom";
    import style from '../Common/FormsControls/FormControls.module.css'
    import styles from './Login.module.css'
    import {getAuthorize, getCaptcha} from "../../Redux/Selectors/auth-selector";
    import door from './login-door.png'



    const LoginForm = ({handleSubmit, error,captchaUrl}) => {
        return (
            <form onSubmit={handleSubmit}>
                {CreateField('Email', [required], 'email', Input)}
                {CreateField('Password', [required, maxLength10], 'password', Input, {type: 'password'})}
                <input type="checkbox" /> remember me
                {captchaUrl && <img alt='captcha' src={captchaUrl}/>}
                {captchaUrl && CreateField('Captcha',[],'captchaUrl',Input)}
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }

    const LoginReduxForm = reduxForm({
        form: 'login'
    })(LoginForm)

    const Login = (props) => {
        const onSubmit = (formData) =>{
           props.login(formData.email,formData.password,formData.rememberMe,formData.captchaUrl);
        }
        if (props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return (
            <div className={styles.loginContainer}>
            <div style={{textAlign:"center"}} className={styles.blockItem}>
                <div className={styles.door}>
                    <img src={door} alt = 'door'/>
                </div>
                <h1>Login</h1>
               <LoginReduxForm onSubmit ={onSubmit}
                               captchaUrl = {props.captchaUrl}
               />
            </div>
            </div>
        )
    }



    let mapStateToProps = (state) => {
        return{
            isAuth: getAuthorize(state),
            captchaUrl: getCaptcha(state)
        }
    }

    export default connect(mapStateToProps,{
        login,
        logOut
    })(Login);