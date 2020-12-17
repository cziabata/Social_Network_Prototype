import { dialogs_reducer } from "./dialogs_reducer";
import { profile_reducer } from "./profile_reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
          {id: "1", text: "111 Message Text 111", likesCount: "5"},
          {id: "2", text: "222 Message Text 222", likesCount: "10"},
          {id: "3", text: "333 Message Text 333", likesCount: "9"},
          {id: "4", text: "444 Message Text 444", likesCount: "12"},
        ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
          {id: "1", name: "USER 1"},
          {id: "2", name: "USER 2"},
          {id: "3", name: "USER 3"},
          {id: "4", name: "USER 4"},
        ],
      messages: [
          {id: "1", message: "MESSAGE 1"},
          {id: "2", message: "MESSAGE 2"},
          {id: "3", message: "MESSAGE 3"},
          {id: "4", message: "MESSAGE 4"},
        ],
      newMessage: "",
    },
  },
  _rerenderEntireTree() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profile_reducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action);

    this._rerenderEntireTree(this.getState());
  }
} 
export default store;
