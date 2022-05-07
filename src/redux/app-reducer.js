import {getProfileAPI, profileAPI} from "../api/api";
import {authMe} from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE-SUCCESS'


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

export default appReducer

export const initializeSuccess = () => ({type: INITIALIZE_SUCCESS})

export const initialize = () => {
    return (dispatch) => {
       let promise = dispatch(authMe())
        Promise.all([promise]).then(() => {
            dispatch(initializeSuccess())
        })
    }
}
