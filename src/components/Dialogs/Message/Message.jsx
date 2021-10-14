import modules from './Message.module.css'

const Message = (props) => {
    return (
        <div className={modules.message}>{props.msg}</div>
    )

}


export default Message