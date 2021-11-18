import modules from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { Field, Form } from 'react-final-form'



const AddMessageForm = (props) => {

    let onSubmit = (values) => {
        props.onAddMessage(values.newMessageText)
        values.newMessageText = ''


    }

    let validate = (e) => {
        

        const errors = {}

        if (e.newMessageText && e.newMessageText.length > 50) {
            errors.newMessageText = 'Слишком много'


        }

        return errors
    }



    return <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <Field name='newMessageText' render={({ input, meta }) => (
                <div>
                    <div>
                        <textarea {...input} placeholder='Enter your message'></textarea>
                        {meta.error && <p>{meta.error}</p>}
                    </div>
                    <div><button type='submit'>Send message</button></div>
                </div>

            )} />
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