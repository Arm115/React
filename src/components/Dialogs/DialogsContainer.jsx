import React from 'react'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'




const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let onAddMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
            
                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text))
                }
                return <Dialogs onMessageChange={onMessageChange} onAddMessage={onAddMessage} newMessageValue={state.dialogs.dialogs.newMessageValue} messagesData={state.dialogs.dialogs.messagesData} dialogsData={state.dialogs.dialogs.dialogsData} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer