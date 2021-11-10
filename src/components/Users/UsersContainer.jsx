import React from "react"
import { connect } from "react-redux"
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { followAC, followingThunkCreator, getCurrentPageThunkCreator, getUsers, setCurrentPageAC, setUsersAC, toggleFetchingAC, toggleFollowingInProgressAC, unfollowAC, unfollowingThunkCreator } from "../../redux/users-reducer"
import Users from "./Users";



class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }


    unfollowing = (id) => {
        this.props.unfollowingThunk(id)
    }

    

    following = (id) => {
        this.props.followingThunk(id)

    }



    onPageChanged = (currentPage) => {
        this.props.getCurrentPage(currentPage)
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
        },
        getUsers:(currentPage,pageSize) => {
            dispatch(getUsers(currentPage,pageSize))
        },
        unfollowingThunk:(id) => {
            dispatch(unfollowingThunkCreator(id))
        },
        followingThunk:(id) => {
            dispatch(followingThunkCreator(id))
        },
        getCurrentPage:(currentPage,pageSize) => {
            dispatch(getCurrentPageThunkCreator(currentPage,pageSize))
        }

    }
}

let AuthRedirectComponent = withAuthRedirect(UsersAPIContainer)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default UsersContainer