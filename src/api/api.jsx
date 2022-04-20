import * as axios from "axios";


let getUsers1Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c623e0d5-b645-4a5f-a99f-58bbc2af8303'
    }
})

export const getUsers1 = (pageNumber = 1, pageSize = 30) => {
    return getUsers1Instance.get(`users?page=${pageNumber}&count=${pageSize}`, {
        withCredentials: true,
    })
        .then(response => response.data)
}