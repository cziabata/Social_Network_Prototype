import { authAPI } from "./../api/api";

const SET_AUTH_INFO = "SET_AUTH_INFO";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const auth_reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_INFO:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: {
            return {
                state
            };
        }
    }
}

export const setAuthInfo = ({id, email, login}) => ({type: SET_AUTH_INFO, data: {id, email, login}});

export const setAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthInfo({id, email, login}));
        }
    })
}