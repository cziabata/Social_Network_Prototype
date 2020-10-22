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
    },
  },
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    console.log("state changed");
  },
  addPost() {
    let newPost = {
      id: 5, text: this._state.profilePage.newPostText, likesCount: 7
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  subscriber(observer) {
    this._rerenderEntireTree = observer;
  }
} 

export default store;
