import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile, getUserProfile } from "./../../redux/profile_reducer";
import { withRouter, Redirect } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { ProfileRedirect } from "../hoc/ProfileRedirect";
import { compose } from "redux";
import { getUserStatus, updateUsersStatus } from "./../../redux/profile_reducer";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 9786;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);

    }
    render() {
       return (
        <>
           <Profile {...this.props} userProfile={this.props.userProfile} status={this.props.status} 
                                    updateUsersStatus={this.props.updateUsersStatus}/>
        </>
       )
    }
}

{/*     
        // HOC logic - redirect if user log out (more on hoc directory) //
        
        let ProfileRedirectContainer = ProfileRedirect(ProfileContainer);
        let WithRouteDataProfileContainer = withRouter(ProfileRedirectContainer) />

*/}
let mapStateToProps = (state) => { 
    return {
        userProfile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(connect(mapStateToProps, {setUserProfile, getUserProfile, getUserStatus, updateUsersStatus}), withRouter)(ProfileContainer);