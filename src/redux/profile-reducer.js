import {getProfileAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-USER-STATUS'

let initialState = {
    profile: null,
    status: '',
    newPostText: '',
    postData: [
        {
            id: '1',
            count: '15',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eveniet accusamus, soluta praesentium recusandae maiores explicabo mollitia a. Odit magni culpa, ratione natus error eligendi, vero suscipit beatae et consequatur sapiente atque doloribus doloremque repellendus quia sint! Commodi ab unde suscipit accusamus, quae in nobis modi possimus tempora reiciendis quisquam.'
        },
        {id: '2', count: '4', text: "Hi, what's up?"},
        {
            id: '3',
            count: '20',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore incidunt commodi recusandae optio provident perspiciatis nemo sunt at in. Deserunt fugiat, sint beatae at numquam dolore ut possimus, labore repellat mollitia rem officiis. Ducimus, aliquid deserunt! Incidunt iusto, et quo molestiae perspiciatis officia pariatur perferendis vero atque molestias mollitia enim repellendus tempore porro maxime inventore quod itaque unde saepe nihil maiores esse beatae! Repellat quos hic quidem mollitia earum ipsum sapiente esse! Laboriosam accusantium totam similique fugiat, consectetur veniam expedita reprehenderit dolorem repellendus ducimus dignissimos perspiciatis quidem hic corrupti voluptate possimus! Esse delectus distinctio minus omnis vitae consequuntur ipsam corrupti.'
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postData: [...state.postData, {id: '5', count: '0', text: state.newPostText}],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, text: newText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export default profileReducer


export const getProfile = (userId) => {
    return (dispatch) => {
        getProfileAPI(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
                debugger;
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
}