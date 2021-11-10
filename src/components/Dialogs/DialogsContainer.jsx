import { connect } from 'react-redux'
import { compose } from 'redux'
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

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
