import { usersAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_BUTTON_FETCHING = "TOGGLE_BUTTON_FETCHING";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disabledUsers: []
}

export let users_reducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if(users.id === action.userId) {
                        return {
                            ...users,
                            followed: true
                        }
                    }
                    return users;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if(users.id === action.userId) {
                        return {
                            ...users,
                            followed: false
                        }
                    }
                    return users;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.usersNumber
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_BUTTON_FETCHING:
            return {
                ...state,
                disabledUsers: action.isFetching 
                               ? [...state.disabledUsers, action.userId]
                               : state.disabledUsers.filter(id => id != action.userId)
            }
        default: 
            return state;
    }
}

export const followUser = (userId) => ({type: FOLLOW, userId});
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (usersNumber) => ({type: SET_TOTAL_USERS_COUNT, usersNumber});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setDisabledUsers = (isFetching, userId) => ({type: TOGGLE_BUTTON_FETCHING, isFetching, userId});

export const setUsersThunkCreator = (pageSize) => { 
    return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        } )
    }
}

export const onPageChangedThunkCreator = (pageSize, pages) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(pageSize, pages).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
        })
        dispatch(setCurrentPage(pages));
    }
}

export const followUserThunkCreator = (usersId) => {
    return (dispatch) => {
        dispatch(setDisabledUsers(true, usersId))
        usersAPI.follow(usersId).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(followUser(usersId))
            }
            dispatch(setDisabledUsers(false, usersId))
        })
    }
}

export const unfollowUserThunkCreator = (usersId) => {
    return (dispatch) => {
        dispatch(setDisabledUsers(true, usersId));
            usersAPI.unfollow(usersId).then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(unfollowUser(usersId))
                }
                dispatch(setDisabledUsers(false, usersId))
                })
    }
}