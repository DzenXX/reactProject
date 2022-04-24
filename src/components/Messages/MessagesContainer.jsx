import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        textData: state.messagesPage.textData,
        userData: state.messagesPage.userData,
        newMessageText: state.messagesPage.newMessageText,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

// let AuthRedirectComponent = (props) => {
//     debugger;
//     if (!props.isAuth) {
//         return <Navigate to='/login' />
//     }
//     return <Messages {...props} />
// }



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Messages)