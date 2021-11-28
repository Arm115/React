import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { followAC, followingThunkCreator, getCurrentPageThunkCreator, getUsers, setCurrentPageAC, setUsersAC, toggleFetchingAC, toggleFollowingInProgressAC, unfollowAC, unfollowingThunkCreator } from "../../redux/users-reducer"
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUserCount, getUsersSelector } from "../../redux/selectors/users-selectors";
import Users from "./Users";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }


    unfollowing = (id) => {
        this.props.unfollowingThunk(id)
    }

    

    following = (id) => {
        this.props.followingThunk(id)

    }



    onPageChanged = (currentPage) => {
        this.props.getCurrentPage(currentPage,this.props.pageSize)
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.currentPage !== this.props.match.params.currentPage){
            this.props.getCurrentPage(this.props.match.params.currentPage, this.props.pageSize)
        }
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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(UsersContainer)
