import React from 'react'
import { connect } from 'react-redux'
import { logout, setUserData } from '../../redux/auth-reducer'
import Header from './Header'
import modules from './Header.module.css'



class HeaderContainerComponent extends React.Component{
    render(){
        return <Header {...this.props} userLogout={this.props.logout}/>
    }
}

let mstp = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})



const HeaderContainer = connect(mstp,{setUserData,logout})(HeaderContainerComponent)

export default HeaderContainer