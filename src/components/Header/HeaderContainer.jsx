import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setUserData } from '../../redux/auth-reducer'
import Header from './Header'
import modules from './Header.module.css'


class HeaderContainerComponent extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials:true
        }).then(response => {
            
            if(response.data.resultCode === 0){
                let {id,email,login} = response.data.data 
                this.props.setUserData(id,email,login)
            }
            
        })
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mstp = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mstp,{setUserData})(HeaderContainerComponent)

export default HeaderContainer