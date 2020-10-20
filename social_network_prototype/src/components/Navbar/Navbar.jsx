import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.nav}>
          <div className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
          <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
          <div className={classes.item}><a href="#">News</a></div>
          <div className={classes.item}><a href="#">Music</a></div>

          <div className={classes.friendsBlock}>
            <div className={classes.friendsTitle}>Top 3 Friends</div>
            <div className={classes.friendsWrapper}>
              <div className={classes.friendsItem}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-zwdoRQ_nOQciWkfGHCiq2OqL-ekGOgqKjQ&usqp=CAU" alt=""
                className={classes.friendsImg} />
                <span>Friend 111</span>
              </div>
              <div className={classes.friendsItem}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_Rw7mPUniE7gqObCvZS4wWZAeU9rx2Kp9lw&usqp=CAU" alt=""
                className={classes.friendsImg} />
                <span>Friend 222</span>
              </div>
              <div className={classes.friendsItem}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7Z5FcHaoxkJAJg2FE87hGFR6KTlnbpOwSlw&usqp=CAU" alt=""
                className={classes.friendsImg} />
                <span>Friend 333</span>
              </div>
            </div>

          </div>
        </div>
    )
}

export default Navbar;