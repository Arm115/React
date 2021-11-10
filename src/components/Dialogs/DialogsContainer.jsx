import React from 'react'
import { connect } from 'react-redux'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'



let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogs.dialogs.dialogsData,
        messagesData: state.dialogs.dialogs.messagesData,
        newMessageValue: state.dialogs.dialogs.newMessageValue,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer