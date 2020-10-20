import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
      <div>
        <div className={classes.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHA8zgHCqjsyeyZ5X8N5BmLCETjyrUVEmfEA&usqp=CAU" />
          <span>{props.message}</span>
          <div>Likes <span>{props.likesCount}</span></div>
        </div>
      </div>
    );
}

export default Post;