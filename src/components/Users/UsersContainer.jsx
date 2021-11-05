import React from "react"
import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setUsersAC, toggleFetchingAC, unfollowAC } from "../../redux/users-reducer"
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { followAPI, usersAPI } from "../../api/api";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchings(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.isFetchings(false)
            this.props.setUsers(data.items)

        });
    }



    onPageChanged = (currentPage) => {
        this.props.isFetchings(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {

            this.props.isFetchings(false)
            this.props.setUsers(data.items)
        });
    }

    following = (id) => {
        followAPI.userFollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(id)
                }


            });
    }
    unfollowing = (id) => {
        followAPI.userUnfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unfollow(id)
                }


            });
    }


    render() {

        return <Users
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            isFetching={this.props.isFetching}
            userUnfollow={this.props.userUnfollow}
            userFollow={this.props.userFollow}
            following={this.following}
            unfollowing={this.unfollowing}

        />

    }

}


let mapStateToProps = (state) => {

    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        isFetchings: (isFetching) => {
            dispatch(toggleFetchingAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer