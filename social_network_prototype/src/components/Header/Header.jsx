import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <img src="https://dynamic.brandcrowd.com/asset/logo/d8cb7121-b606-4b39-bf45-7c9cf6d9829e/logo?v=4" alt="logo"></img>
            <div className={classes.authInfo}>
               <NavLink to="/login">{ props.isAuth ?  props.login : "Login" }</NavLink>
            </div>
        </div>
    )
}

export default Header;