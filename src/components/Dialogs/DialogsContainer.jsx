import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { addMessageActionCreator } from '../../redux/dialogs-reducer'
import { getDialogsData, getId, getMessagesData } from '../../redux/selectors/dialogs-selectors'
import Dialogs from './Dialogs'



class DialogsContainer extends React.Component {
    componentDidMount(){
        if(!this.props.userId){
            
            return this.props.history.push("login")

        }
    }

    render(){
        return <Dialogs {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsData: getDialogsData(state),
        messagesData: getMessagesData(state),
        userId: getId(state)
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
    withRouter
)(DialogsContainer)
