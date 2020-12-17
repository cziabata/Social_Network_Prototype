import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

    let postsElements = props.posts.map( posts => <Post message={posts.text} likesCount={posts.likesCount} key={posts.id} /> )
    
    let newPostText = React.createRef();

    let addPost = () => {
      props.addPost();
    }

    let onPostChange = () => {
      let text = newPostText.current.value;
      props.updateNewPostText(text);
    }

    return (
      <div className={classes.postBlock}>
        <div>New Post</div>
        <div>
          <textarea ref={newPostText} onChange={onPostChange} value={props.newPostText}/>
          <button onClick={addPost}>Add Post</button>
        </div>
        <div>
          { postsElements }
        </div>
      </div>
    );
}

export default MyPosts;