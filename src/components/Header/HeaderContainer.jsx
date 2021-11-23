import React from 'react'
import { connect } from 'react-redux'
import { authThunk, logout, setUserData } from '../../redux/auth-reducer'
import Header from './Header'
import modules from './Header.module.css'



class HeaderContainerComponent extends React.Component{
    componentDidMount(){
        
        
        this.props.authThunk()
    }


    render(){
        return <Header {...this.props} userLogout={this.props.logout}/>
    }
}

let mstp = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})



const HeaderContainer = connect(mstp,{setUserData,authThunk,logout})(HeaderContainerComponent)

export default HeaderContainer