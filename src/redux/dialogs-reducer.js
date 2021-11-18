const ADD_MESSAGE = 'ADD_MESSAGE'


let initialState = {
    dialogs:{
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
    }
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: action.newMessageText
            }

            let stateCopy = {...state}
            stateCopy.dialogs.messagesData = [...state.dialogs.messagesData]
            stateCopy.dialogs.messagesData.push(newMessage)


            return stateCopy
        }
        default:
            return state

    }

}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })



export default dialogsReducer