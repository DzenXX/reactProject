import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c623e0d5-b645-4a5f-a99f-58bbc2af8303'
    }
})



export const getUsers1 = (pageNumber = 1, pageSize = 30) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => response.data)
}

export const followUserAPI = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const unfollowUserAPI = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}

export const authMeAPI = () => {
    return instance.get('auth/me')
        .then(response => response.data)
}


export const getProfileAPI = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data)
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {
            status: status
        })
    }
}

export const authAPI = {
    getCaptchaAPI: () => {
        debugger;
        return instance.get('security/get-captcha-url')
            .then(res => res.data.url)
    },
    authUserAPI: (email, password, rememberMe, captcha) => {
        return instance.post('/auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha,
        }).then(response => {
            debugger;
            return response.data
        })
    },
    getOutUserAPI: (email, password, rememberMe, captcha) => {
        return instance.post('/auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha,
        })
    }
}