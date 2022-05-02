import {Field, reduxForm} from "redux-form";
import input from "../Messages/InputContainer/Input/Input";
import {compose} from "redux";
import {connect} from "react-redux";
import {authUser, getCaptchaURL} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";
import LoginForm from "./LoginForm/LoginForm";
import {Navigate} from "react-router-dom";


let Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        debugger;
        props.authUser(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    return (
       <div>
           <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit} />
       </div>
    )
}

let mapStateToProps = (state) => {
    return {
    }
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)



export default compose(
    connect(mapStateToProps, {getCaptchaURL, authUser})
)(Login)
