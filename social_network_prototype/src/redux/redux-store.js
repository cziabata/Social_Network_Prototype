import { combineReducers, createStore } from "redux";
import { dialogs_reducer } from "./dialogs_reducer";
import { profile_reducer } from "./profile_reducer";
import { users_reducer } from "./users_reducer";
import { auth_reducer } from "./auth_reducer";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profile_reducer, 
    dialogsPage: dialogs_reducer,
    usersPage: users_reducer,
    auth: auth_reducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
