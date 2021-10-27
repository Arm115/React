const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE_NEW_MESSAGE_CHANGE'

let initialState = {
    dialogs: {
        dialogsData: [
            { id: 1, name: 'Vlad', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36DPlGB9gHZ2cGWpOVwu9vfjH3ibtOkrzPg&usqp=CAU' },
            { id: 2, name: 'Dimych', avatar: 'https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg' },
            { id: 3, name: 'Elena', avatar: 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png' }
        ],
        messagesData: [
            { id: 1, message: 'Hi how are you' },
            { id: 2, message: 'How you did it' },
            { id: 3, message: 'Good luck' },
        ],
        newMessageValue: ''
    },
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id: 4,
                message: state.dialogs.newMessageValue
            }

            let stateCopy = {...state}
            stateCopy.dialogs.messagesData = [...state.dialogs.messagesData]
            stateCopy.dialogs.messagesData.push(newMessage)
            stateCopy.dialogs.newMessageValue = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_CHANGE:{
            let stateCopy = {...state}
            stateCopy.dialogs.newMessageValue = action.newMessageText
            return stateCopy
        }
        default:
            return state

    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})
export const onMessageChangeActionCreator = (newMessageText) =>
    ({type: UPDATE_NEW_MESSAGE_CHANGE, newMessageText: newMessageText})



export default dialogsReducer