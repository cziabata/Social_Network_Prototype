import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import { Field, reduxForm } from 'redux-form'

const MyPosts = (props) => {

    let postsElements = props.posts.map( posts => <Post message={posts.text} likesCount={posts.likesCount} key={posts.id} /> )

    let addPost = (values) => {
      props.addPost(values.newPostText);
    }

    const AddPostForm = (props) => {
      return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostText"} placeholder={"Enter post text"}/>
            <button>Add Post</button>
        </form>
      )
    }

    const AddPostFormRedux = reduxForm({
      form: "addPostForm",
    })(AddPostForm)

    return (
      <div className={classes.postBlock}>
        <div>New Post</div>
          <AddPostFormRedux onSubmit={addPost} />
        <div>
          { postsElements }
        </div>
      </div>
    );
}

export default MyPosts;