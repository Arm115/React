import { followAPi, usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return{...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: [...action.isFetching] 
                    ?[...state.followingInProgress, action.userId]
                    :[...state.followingInProgress.filter(id => id != action.userId)]
            }
            

        default:
            return state
    }


}


export const followAC = (id) => ({ type: FOLLOW, id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, id})
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleFetchingAC = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgressAC = (isFetching,userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching,userId })

export const getUsersThunkCreator = (currentPage,pageSize) => {
    return (dispatch) => {
    dispatch(toggleFetchingAC(true))
        usersAPI.getUsers(currentPage,pageSize).then(data => {


            dispatch(toggleFetchingAC(false))
            dispatch(setUsersAC(data.items))
        })
    }
}



export const unfollowingThunkCreator = (id) => {
    return (dispatch) => {
        followAPi.userUnfollowing(id).then(response => {
            

            if (response.data.resultCode === 0) {
                dispatch(unfollowAC(id))
            }if(response.status === 429){
                return <p>Произошла ошибка!</p>
            }

        })
    }
}

export const followingThunkCreator = (id) => {
    return (dispatch) => {
        followAPi.userFollowing(id).then(response => {
            

            if (response.data.resultCode === 0) {
                dispatch(followAC(id))
            }if(response.status === 429){
                return <p>Произошла ошибка!</p>
            }

        })
    }
}


export const getCurrentPageThunkCreator = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(toggleFetchingAC(false))
            dispatch(setUsersAC(data.items))
        });
    }
}

export default usersReducer