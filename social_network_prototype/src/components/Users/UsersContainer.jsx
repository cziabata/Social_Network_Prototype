import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import * as axios from "axios";
import { followUser, setCurrentPage, setUsers, unfollowUser, setTotalUsersCount, setIsFetching, 
         setDisabledUsers, setUsersThunkCreator, onPageChangedThunkCreator,
         unfollowUserThunkCreator, followUserThunkCreator } from "../../redux/users_reducer";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "./../../api/api";

class UsersAPIContainer extends React.Component { 

  constructor(props) {
      super(props);
  }

  componentDidMount() {
      this.props.setUsersThunkCreator(this.props.pageSize);
  }

  onPageChanged = (pages) => {
      this.props.onPageChangedThunkCreator(this.props.pageSize, pages);
  }

  render() {
      return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollowUser={this.props.unfollowUser}
                    followUser={this.props.followUser}
                    setDisabledUsers={this.props.setDisabledUsers}
                    disabledUsers={this.props.disabledUsers}
                    unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
                    followUserThunkCreator={this.props.followUserThunkCreator}
                    />
    </>
  } 
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    disabledUsers: state.usersPage.disabledUsers,
  };
};

export let UsersContainer = connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setDisabledUsers,
  setUsersThunkCreator,
  onPageChangedThunkCreator,
  unfollowUserThunkCreator,
  followUserThunkCreator,
})(UsersAPIContainer);
