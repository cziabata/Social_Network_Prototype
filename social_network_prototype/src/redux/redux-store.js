import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
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
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
