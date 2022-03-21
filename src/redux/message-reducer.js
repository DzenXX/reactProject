const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'


const messageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state
        case ADD_MESSAGE:
            let messageText = state.newMessageText;
            let newMessage = {yourMessage: true, id: 'ann', text: messageText};
            state.textData.push(newMessage)
            state.newMessageText = '';
            return state
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (newText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: newText })
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default messageReducer