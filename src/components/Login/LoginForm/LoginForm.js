import {getCaptchaURL} from "../../../redux/auth-reducer";
import {Field} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import React from "react";
import s from './LoginForm.module.css'
import {maxLength, required} from "../../../utilits/validators/validators";
import ComponentForField from "../../../hoc/ComponentForField";
import {Navigate} from "react-router-dom";


let maxLength50 = maxLength(50)
let Input = ComponentForField('input')

class LoginForm extends React.Component {

    componentDidMount() {
        this.props.getCaptchaURL();
    }


    render() {
            if (this.props.isAuth === true) {
                return <Navigate to='/profile'/>
            }
            return (
            <form onSubmit={this.props.handleSubmit}>
                {this.props.error && <div className={s.formError}>{this.props.error}</div> }
                <div className={s.wrapper}>
                    <Field validate={[required, maxLength50]} component={Input} name={'email'} placeholder={'Email'} className={s.input}/>
                </div>
                <div className={s.wrapper}>
                    <Field validate={[required, maxLength50]} component={Input} name={'password'} placeholder={'Password'} className={s.input}/>
                </div>
                <div className={s.wrapper}>
                    <Field validate={[required, maxLength50]} component={Input} name={'captcha'} placeholder={'Text from captcha'} className={s.input}/>
                </div>
                <div className={s.wrapper}>
                    <img src={this.props.captchaURL} alt="captcha"/>
                </div>
                <div className={s.wrapper}>
                    <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        captchaURL: state.auth.captchaURL,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getCaptchaURL})
)(LoginForm)