import modules from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { required, requiredDisable } from '../../utils/validator'
import { Element } from '../../hoc/GetElement'



const AddMessageForm = (props) => {

    const TextArea = Element("textarea")

    let onSubmit = (values) => {
        props.onAddMessage(values.newMessageText)
        values.newMessageText = ''


    }

    let validate = (values) => {
        

        const errors = {}

        errors.newMessageText = required(values.newMessageText)


        return errors
    }

    

    return <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <Field name='newMessageText'
             component={TextArea}
             placeholder='Add message'
             />
            <button>Send</button>
        </form>
    )}
/>

}



const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />)
    let messagesElements = props.messagesData.map(message => <Message msg={message.message} />)

    return (
        <div className={modules.dialogs}>
            <div className={modules.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={modules.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageForm onAddMessage={props.onAddMessage}/>
            </div>
        </div>
    )
}


export default Dialogs