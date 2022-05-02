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
        case ADD_MESSAGE: {
                let newMessage = {yourMessage: true, id: 'ann', text: action.newText};
                console.log(newMessage)
                return {
                    ...state,
                    textData: [...state.textData, newMessage],
                }

        }
        default:
            return state
    }
}

export const addMessage = (newText) => ({type: ADD_MESSAGE, newText: newText})

export default messagesReducer