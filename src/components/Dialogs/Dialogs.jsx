import modules from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer'






const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />)
    let messagesElements = props.state.messagesData.map(message => <Message msg={message.message} />)




    let addMessage= () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (event) => {
        let newMessageText = event.target.value
        props.dispatch(onMessageChangeActionCreator(newMessageText))
    }

    return (
        <div className={modules.dialogs}>
            <div className={modules.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={modules.messages}>
                <div>
                    {messagesElements}
                </div>
                <div><textarea onChange={onMessageChange} value={props.state.newMessageValue} placeholder='Enter your message'></textarea></div>
                <div><button onClick={addMessage}>Send message</button></div>
            </div>
        </div>
    )
}

export default Dialogs