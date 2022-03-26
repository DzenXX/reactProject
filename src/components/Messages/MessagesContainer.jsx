import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

let MessagesContainerr = () => {

    debugger;
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let textData = store.getState().messagesPage.textData
                    let userData = store.getState().messagesPage.userData
                    let newMessageText = store.getState().messagesPage.newMessageText
                    let OnMessageChange = (newText) => {
                        store.dispatch(updateNewMessageTextActionCreator(newText));
                    }
                    let AddMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    return <Messages newMessageText={newMessageText} addMessage={AddMessage}
                                     updateNewMessageText={OnMessageChange}
                                     textData={textData} userData={userData}/>
                }
            }
        </StoreContext.Consumer>
    )
}
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

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer