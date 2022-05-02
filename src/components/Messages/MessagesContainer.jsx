import Messages from "./Messages";
import {
    addMessage,
    updateNewMessageText,
} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import Message from "./Message/Message";
import UserChat from "./User/UserChat";

let MessagesContainer = (props) => {

    let textElements = props.textData.map(t => (<Message store = {props.store} state = {t} />))
    let userElements = props.userData.map(u => (<UserChat name={u.name} id={u.id} />))

    return <Messages newMessageText={props.newMessageText} addMessage={props.addMessage}
                     updateNewMessageText={props.updateNewMessageText} textEl={textElements}
                     userEl={userElements} />

}


let mapStateToProps = (state) => {
    return {
        textData: state.messagesPage.textData,
        userData: state.messagesPage.userData,
        newMessageText: state.messagesPage.newMessageText,

    }
}


export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect,
)(MessagesContainer)