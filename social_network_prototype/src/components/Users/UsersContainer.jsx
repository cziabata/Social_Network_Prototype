import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import * as axios from "axios";
import { followUser, setCurrentPage, setUsers, unfollowUser, setTotalUsersCount, setIsFetching, setDisabledUsers } from "../../redux/users_reducer";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "./../../api/api";

class UsersAPIContainer extends React.Component { 

  constructor(props) {
      super(props);
  }

  componentDidMount() {
      this.props.setIsFetching(true);
      getUsers(this.props.pageSize).then(data => {
          this.props.setIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
      } )
  }

  onPageChanged = (pages) => {
      this.props.setIsFetching(true)
      getUsers(this.props.pageSize, pages).then(data => {
          this.props.setIsFetching(false);
          this.props.setUsers(data.items);
      })
      this.props.setCurrentPage(pages);
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
})(UsersAPIContainer);
