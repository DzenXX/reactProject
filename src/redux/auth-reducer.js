import {authAPI, authMeAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

let initialState = {
    login: null,
    userId: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
               ...state,
                ...action.data,
                isAuth: true,
            }

        }
        default:
            return state
    }
}

export const setAuthUserData = (login, userId, email) => ({type: SET_AUTH_USER_DATA, data: {login, userId, email}})
export default authReducer

export const authMe = () => {
    return (dispatch) => {
        authMeAPI().then(data => {
            if (data.resultCode === 0) {
                let {login, id, email} = data.data
                dispatch(setAuthUserData(login, id, email))
                debugger;
            }
        })
    }
}