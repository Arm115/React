import React from "react"
import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setUsersAC, toggleFetchingAC, toggleFollowingInProgressAC, unfollowAC } from "../../redux/users-reducer"
import Users from "./Users";
import { followAPi, usersAPI } from "../../api/api";



class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchings(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {


            this.props.isFetchings(false)
            this.props.setUsers(data.items)
        })
    }


    unfollowing = (id) => {
        followAPi.userUnfollowing(id).then(response => {

            if (response.data.resultCode === 0) {
                this.props.unfollow(id)
            }

        })
    }

    following = (id) => {
        followAPi.userFollowing(id).then(response => {
            if (response.data.resultCode === 0) {
                this.props.follow(id)
            }

        })

    }



    onPageChanged = (currentPage) => {
        this.props.isFetchings(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {

            this.props.isFetchings(false)
            this.props.setUsers(data.items)
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
            following={this.following}
            unfollowing={this.unfollowing}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            followingInProgress={this.props.followingInProgress}

        />

    }

}


let mapStateToProps = (state) => {

    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        isFetchings: (isFetching) => {
            dispatch(toggleFetchingAC(isFetching))
        },
        toggleFollowingInProgress: (followingInProgress) => {
            dispatch(toggleFollowingInProgressAC(followingInProgress))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer