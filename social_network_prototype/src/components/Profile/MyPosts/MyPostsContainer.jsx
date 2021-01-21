import React from "react";
import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => { 
  return {
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostAC(newPostText));
    },
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;