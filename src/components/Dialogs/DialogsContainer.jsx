import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'



let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogs.dialogs.dialogsData,
        messagesData: state.dialogs.dialogs.messagesData,
        newMessageValue: state.dialogs.dialogs.newMessageValue,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}



let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer