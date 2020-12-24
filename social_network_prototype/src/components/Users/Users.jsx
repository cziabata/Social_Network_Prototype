import React from "react";
import userIcon from "./../../assets/images/users.jpg"
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { usersAPI } from "./../../api/api";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
      {
          for(let i = 1; i <= pageCount; i++) {
              pages[i] = i;
          }
      }
    return <div className={classes.usersWrapper}>
            {
                pages.map(pages => <span className={classes.pagesWrapper}>
                                    <span className={props.currentPage === pages && classes.currentPage}
                                        onClick={ () => props.onPageChanged(pages) }>{pages}</span>
                                </span>)
            }
            {
                props.users.map(users => <div key={users.id}>
                    <NavLink to={"/profile/" + users.id}>
                        <img src={users.photos.small != null ? users.photos.small : userIcon} className={classes.avatar}/>
                    </NavLink>
                    <span>{users.name}</span>
                    <div>id: {users.id}</div>
                    <div>{users.status != null ? users.status : "Users status is empty"}</div>
                    <div>{}</div>
                    <div className={classes.button}>
                        { users.followed ? 
                            <button disabled={props.disabledUsers.some( id => id === users.id )} onClick={() => {
                                props.unfollowUserThunkCreator(users.id)
                            }}>Unfollow</button> 
                            : 
                            <button disabled={props.disabledUsers.some( id => id === users.id )} onClick={ () => {
                                props.followUserThunkCreator(users.id);
                            }}>Follow</button>}
                    </div>
                </div>)
            } 
    </div>
}

export default Users;