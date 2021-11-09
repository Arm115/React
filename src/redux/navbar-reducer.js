import { profileAPI } from "../api/api"

const USER_ID = 'USER_ID'

let initialState = {
    navbar: {
        friends: [
            { id: 1, name: 'Vlad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36DPlGB9gHZ2cGWpOVwu9vfjH3ibtOkrzPg&usqp=CAU' },
            { id: 2, name: 'Dimych', img: 'https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg' },
            { id: 3, name: 'Elena', img: 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png' }
        ],
    },
    id: null
}

const navbarReducer = (state = initialState,action) => {
    switch(action.type){
        case USER_ID:
            return{
                ...state,
                id: action.id
            }
        default:
            return state
        
    }
}


export const getUserId = (id) => ({type:USER_ID, id})

export const getMyProfileThunk = () => {
    return (dispatch) => {
        profileAPI.getMyProfile().then(response => {

            
            if(response.data.resultCode === 0){
                dispatch(getUserId(response.data.data.id))
            }
            
        })
    }
}

export default navbarReducer