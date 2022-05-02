import {authUser, getCaptchaURL} from "../../../redux/auth-reducer";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import React from "react";
import LoginForm from "../../Login/LoginForm/LoginForm";
import Input from "./Input/Input";
import {addMessage} from "../../../redux/messages-reducer";

class InputContainer extends React.Component {

    onSubmit = (data) => {
       this.props.addMessage(data.text)
    }

    render() {
        return (
            <div>
                <ReduxInput onSubmit={this.onSubmit} />
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
    }
}

let ReduxInput = reduxForm({
    form: 'inputMessage'
})(Input)



export default compose(
    connect(mapStateToProps, {addMessage})
)(InputContainer)