import modules from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'






const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />)
    let messagesElements = props.messagesData.map(message => <Message msg={message.message} />)
    // props.state.dialogs.dialogsData.map
    // props.state.dialogs.messagesData.map

    let addMessage= () => {
        props.onAddMessage()
    }

    let MessageChange = (event) => {
        let newMessageText = event.target.value
        props.onMessageChange(newMessageText)
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
                <div><textarea onChange={MessageChange} value={props.newMessageValue} placeholder='Enter your message'></textarea></div>
                <div><button onClick={addMessage}>Send message</button></div>
            </div>
        </div>
    )
}

export default Dialogs