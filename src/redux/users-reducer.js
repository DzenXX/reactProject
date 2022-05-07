import {authAPI, followUserAPI, getUsers1, unfollowUserAPI} from "../api/api";

const ACCEPT_FOLLOW = 'ACCEPT-FOLLOW'
const ACCEPT_UNFOLLOW = 'ACCEPT-UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWing-IN-PROGRESS'

let initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCEPT_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        debugger;
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        }
        case ACCEPT_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            debugger;
                return {
                    ...state,
                    users: [...action.users]

                }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            debugger;
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            debugger;
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state
    }
}

export const acceptFollow = (userId) => ({type: ACCEPT_FOLLOW, userId})
export const acceptUnfollow = (userId) => ({type: ACCEPT_UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})
export default usersReducer


export const getAllUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        debugger;
        dispatch(toggleIsFetching(true))
        getUsers1(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const changePage = (pageNumber, pageSize) => {
    return (dispatch) => {
        debugger;
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        getUsers1(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setUsers(data.items));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        unfollowUserAPI(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptUnfollow(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        followUserAPI(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptFollow(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}


