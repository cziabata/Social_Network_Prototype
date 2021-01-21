import { usersAPI } from "./../api/api";
import { profileAPI } from "./../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    
        posts: [
            {id: "1", text: "111 Message Text 111", likesCount: "5"},
            {id: "2", text: "222 Message Text 222", likesCount: "10"},
            {id: "3", text: "333 Message Text 333", likesCount: "9"},
            {id: "4", text: "444 Message Text 444", likesCount: "12"},
          ],
        profile: null,
        status: ""
}

export let profile_reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            return {
                ...state, 
                posts: [...state.posts, { id: 5, text: action.newPostText, likesCount: 7 }],
                newPostText: ""
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostAC = (newPostText) =>  ({ type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status}); 

export const getUserProfile = (userId) => (dispatch) => {
     usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}
export const getUserStatus = (userId) => (dispatch) => {
     profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateUsersStatus = (status) => (dispatch) => {
     profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}