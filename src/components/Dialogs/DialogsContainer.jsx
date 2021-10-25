import React from 'react'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'




const DialogsContainer = (props) => {


    let onAddMessage= () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    }

    return (<Dialogs onMessageChange={onMessageChange} onAddMessage={onAddMessage} newMessageValue={props.store.getState().dialogs.dialogs.newMessageValue} messagesData={props.store.getState().dialogs.dialogs.messagesData} dialogsData={props.store.getState().dialogs.dialogs.dialogsData}/>)
}

export default DialogsContainer