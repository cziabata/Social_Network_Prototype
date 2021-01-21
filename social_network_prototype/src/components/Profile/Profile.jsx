import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateUsersStatus={props.updateUsersStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;