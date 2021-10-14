import modules from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
// import { dialogsData, messagesData } from './../../index'
import {dialogsData,messagesData} from './../../index'





const Dialogs = (props) => {
    



    let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
    let messagesElements = props.messagesData.map(message => <Message msg={message.message} />)


    return (
        <div className={modules.dialogs}>
            <div className={modules.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={modules.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs