const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    newMessageText: '',
    userData: [
        {name: 'Anya', id: 'ann'},
        {name: 'Egor', id: 'egor'},
        {name: 'Sasha', id: 'alexander'},
        {name: 'Vlad', id: 'vladislav'},
        {name: 'Yarik', id: 'yaroslav'}
    ],
    textData: [
        {yourMessage: false, id: 'ann', text: 'Hello'},
        {yourMessage: true, id: 'ann', text: "Hi, what's up?"},
        {yourMessage: false, id: 'ann', text: 'Everithing is fine'}
    ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text,
            }
        case ADD_MESSAGE: {
            let messageText = state.newMessageText;
            let newMessage = {yourMessage: true, id: 'ann', text: messageText};
            return {
                ...state,
                textData: [...state.textData, newMessage]
            }
        }
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: newText})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default messagesReducer