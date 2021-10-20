import modules from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'





const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />)
    let messagesElements = props.state.messagesData.map(message => <Message msg={message.message} />)

    let messageText = React.createRef()


    return (
        <div className={modules.dialogs}>
            <div className={modules.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={modules.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ></textarea>
                <button >Send message</button>
            </div>
        </div>
    )
}

export default Dialogs