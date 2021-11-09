import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { profileAPI } from '../../api/api'
import { authThunk, setUserData } from '../../redux/auth-reducer'
import Header from './Header'
import modules from './Header.module.css'



class HeaderContainerComponent extends React.Component{
    componentDidMount(){
        
        
        this.props.authThunk()
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mstp = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})



const HeaderContainer = connect(mstp,{setUserData,authThunk})(HeaderContainerComponent)

export default HeaderContainer