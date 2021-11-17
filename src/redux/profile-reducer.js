import { aboutMeApi, profileAPI, statusApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'
const SET_PROFILE_USERS = 'SET_PROFILE_USERS'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO ='SET_PHOTO'
const UPDATE_ABOUT_ME = 'UPDATE_ABOUT_ME'

let initialState = {
    profile: {
        postsData: [
            { id: 1, message: 'Hi,how are you', likesCount: 78 },
            { id: 2, message: 'My post', likesCount: 20 },
            { id: 3, message: '', likesCount: 0 },
            { id: 4, message: 'This is test of mapping', likesCount: 5 },
        ],
        
    },
    userProfile:null,
    status: "",
    photo: null,
    aboutMe: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.profile.postsData = [...state.profile.postsData]
            stateCopy.profile.postsData.push(newPost)
            stateCopy.profile.newPostValue = ''
            return stateCopy
        }
        case SET_PROFILE_USERS:{
            
            return{...state, userProfile: action.userProfile}
        }
        case SET_STATUS:{
            
            return{...state, status: action.status}
        }
        case SET_PHOTO:{

            return {...state, photo: action.photo}
        }
        // case UPDATE_ABOUT_ME:{
        //     return {...state, aboutMe: action.aboutMe}

        // }
        default:
            return state
    }


}



export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setProfileUsers = (userProfile) => ({type: SET_PROFILE_USERS, userProfile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPhoto = (photo) => ({type: SET_PHOTO, photo})
// export const setAboutMe = (aboutMe) => ({type: UPDATE_ABOUT_ME, aboutMe})

// export const getAboutMe = (aboutMe) => {
//     return (dispatch) => {
//         aboutMeApi.updateAboutMe(aboutMe)
//         .then(response => {
//             dispatch(setAboutMe(aboutMe))
//         })
//     }
// }

export const updatePhoto = (photo) => {
    return (dispatch) => {
        profileAPI.updateImage(photo)
        .then(response => {
            dispatch(setPhoto(photo))
        })
    }
}

export const getProfileThunk = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
        .then(response => {
            dispatch(setProfileUsers(response.data))
            
            
        })
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        statusApi.getUserStatus(id).then(
            response => {
                dispatch(setStatus(response.data))
            }
        )
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        statusApi.updateStatus(status).then(
            response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
                
            }
        )
    }
}

export default profileReducer