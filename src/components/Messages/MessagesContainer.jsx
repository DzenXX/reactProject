import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import StoreContext from "../../StoreContext";

let MessagesContainer = () => {

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

export default MessagesContainer