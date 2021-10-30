import React from "react"
import { connect } from "react-redux"
import { followAC, getCurrentPageAC, setCurrentPageAC, setUsersAC, unfollowAC } from "../../redux/users-reducer"
import Users from "./Users"



let mapStateToProps = (state) => {
    
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
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
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer