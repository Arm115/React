const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'

let initialState = {
    profile: {
        postsData: [
            { id: 1, message: 'Hi,how are you', likesCount: 78 },
            { id: 2, message: 'My post', likesCount: 20 },
            { id: 3, message: '', likesCount: 0 },
            { id: 4, message: 'This is test of mapping', likesCount: 5 },
        ],
        newPostValue: ''
    },
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.profile.newPostValue,
                likesCount: 0
            }
            state.profile.postsData.push(newPost)
            state.profile.newPostValue = ''
            return state
        case UPDATE_NEW_POST_CHANGE:
            state.profile.newPostValue = action.newText
            return state
        default:
            return state
    }


}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (newText) =>
    ({ type: UPDATE_NEW_POST_CHANGE, newText: newText })

export default profileReducer