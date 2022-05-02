import {authAPI, authMeAPI} from "../api/api";

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
            return {
               ...state,
                ...action.data,
                isAuth: true,
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

export const setAuthUserData = (login, userId, email) => ({type: SET_AUTH_USER_DATA, data: {login, userId, email}})
export const setCaptchaURL = (url) => ({type: SET_CAPTCHA_URL, url: url})
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

export const authUser = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.authUserAPI(email, password, rememberMe, captcha).then((data) => {
        if (data.resultCode === 0) {
            dispatch(authMe())
            alert('Welcome to the club, buddy!')
        }
            })
    debugger;
}

export const getCaptchaURL = () => (dispatch) => {
   authAPI.getCaptchaAPI().then(url => {
       debugger;
       dispatch(setCaptchaURL(url))
   })

}