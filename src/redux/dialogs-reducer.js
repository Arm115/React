const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE_NEW_MESSAGE_CHANGE'


const dialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageValue
            }
    
            state.messagesData.push(newMessage)
            state.newMessageValue = ''
            return state
        case UPDATE_NEW_MESSAGE_CHANGE:
            state.newMessageValue = action.newMessageText
            return state
        default:
            return state

    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})
export const onMessageChangeActionCreator = (newMessageText) =>
    ({type: UPDATE_NEW_MESSAGE_CHANGE, newMessageText: newMessageText})



export default dialogsReducer