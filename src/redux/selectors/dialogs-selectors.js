export const getDialogsData = (state) => {
    return state.dialogs.dialogs.dialogsData
}

export const getMessagesData = (state) => {
    return state.dialogs.dialogs.messagesData
} 

export const getId = (state) => {
    return state.auth.id
}