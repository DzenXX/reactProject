import {createSelector} from "reselect";
import users from "../components/Users/Users";

export const getUsers = (state) => {
    console.log('rerender')
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    console.log('rerender selector')
    return users.filter(u => true)
})

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}