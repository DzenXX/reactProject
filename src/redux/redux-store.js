import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
})

let store = createStore(reducers)

export default store

