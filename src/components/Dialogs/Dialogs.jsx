import modules from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { useState } from 'react'


// const AddMessageForm = (props) => {

//     let addMessage = (message) => {
//         props.onAddMessage(message)
//     }

//     let onSubmit = (values) => {
//         addMessage(values)

//     }

//     let validate = (e) => {

//         const errors = {}

//         if (e.newMessageValue && e.newMessageValue.length > 50) {
//             errors.newMessageValue = 'Слишком много'


//         }

//         return errors
//     }

//     return <Form
//         onSubmit={onSubmit}
//         validate={validate}
//         render={({ handleSubmit }) => (
//             <form onSubmit={handleSubmit}>
//                 <Field name='newMessageValue' render={({ input, meta }) => (
//                     <div>
//                         <div><textarea {...input} placeholder='Enter your message'></textarea></div>
//                         <div>{meta.error && <div>{meta.error}</div>}</div>
//                         <div><button type='submit'>Send message</button></div>
//                     </div>

//                 )} />
//             </form>
//         )}
//     />
// }



const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />)
    let messagesElements = props.messagesData.map(message => <Message msg={message.message} />)

    let onSubmit = (values) => {
        props.onAddMessage(values.newMessageText)


    }

    let validate = (e) => {
        

        const errors = {}

        if (e.newMessageText && e.newMessageText.length > 50) {
            errors.newMessageText = 'Слишком много'


        }

        return errors
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
                <Form
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
            </div>
        </div>
    )
}


export default Dialogs