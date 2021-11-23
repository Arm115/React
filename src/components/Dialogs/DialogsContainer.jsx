import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { addMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'




let mapStateToProps = (state) => {
    
    
    return {
        dialogsData: state.dialogs.dialogs.dialogsData,
        messagesData: state.dialogs.dialogs.messagesData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect    
)(Dialogs)
