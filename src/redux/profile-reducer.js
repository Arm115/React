const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'


const profileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostValue,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostValue = ''
            return state
        case UPDATE_NEW_POST_CHANGE:
            state.newPostValue = action.newText
            return state
        default:
            return state
    }


}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (newText) =>
    ({ type: UPDATE_NEW_POST_CHANGE, newText: newText })

export default profileReducer