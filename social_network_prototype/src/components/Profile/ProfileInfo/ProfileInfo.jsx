import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.userProfile){
        return <Preloader />
    }

    return (
        <div className={classes.profileInfo}>
            <img src={props.userProfile.photos.large}/>
            <div>Avatar + Description</div>
            <ProfileStatus status={props.status} updateUsersStatus={props.updateUsersStatus}/>
        </div>
    )
}

export default ProfileInfo;