const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    
        posts: [
            {id: "1", text: "111 Message Text 111", likesCount: "5"},
            {id: "2", text: "222 Message Text 222", likesCount: "10"},
            {id: "3", text: "333 Message Text 333", likesCount: "9"},
            {id: "4", text: "444 Message Text 444", likesCount: "12"},
          ],
        newPostText: "",
        profile: null,
        
}

export let profile_reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            return {
                ...state, 
                posts: [...state.posts, { id: 5, text: state.newPostText, likesCount: 7 }],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = () =>  ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})