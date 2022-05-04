import {authAPI, authMeAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL'

let initialState = {
    login: null,
    userId: null,
    email: null,
    isAuth: false,
    captchaURL: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            debugger;
            return {
               ...state,
                ...action.data,
            }

        }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaURL: action.url,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (login, userId, email, isAuth) => ({type: SET_AUTH_USER_DATA, data: {login, userId, email, isAuth}})
export const setCaptchaURL = (url) => ({type: SET_CAPTCHA_URL, url: url})
export default authReducer

export const authMe = () => {
    return (dispatch) => {
        authMeAPI().then(data => {
            if (data.resultCode === 0) {
                let {login, id, email} = data.data
                dispatch(setAuthUserData(login, id, email, true))
                debugger;
            }
        })
    }
}

export const authUser = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.authUserAPI(email, password, rememberMe, captcha).then((data) => {
        if (data.resultCode === 0) {
            dispatch(authMe())
            alert('Welcome to the club, buddy!')
        } else {
            debugger;
            let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error'
            let action = stopSubmit('login', {_error: errorMessage})
            dispatch(action)
        }
            })
    debugger;
}

export const logOut = () => (dispatch) => {
    debugger;
    authAPI.logOutUserAPI().then(data => {
        data.resultCode === 0 && dispatch(setAuthUserData(null, null, null, false))
    })
}

export const getCaptchaURL = () => (dispatch) => {
   authAPI.getCaptchaAPI().then(url => {
       debugger;
       dispatch(setCaptchaURL(url))
   })

}