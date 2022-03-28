import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
})

let store = createStore(reducers)

window.store = store

export default store
