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

export const updateStatus = (status) => {
    debugger;
    return instance.put(`profile/status`, {
        status: status
    })
}