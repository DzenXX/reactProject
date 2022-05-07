import {reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {authUser, getCaptchaURL} from "../../redux/auth-reducer";
import LoginForm from "./LoginForm/LoginForm";


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
