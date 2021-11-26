import React from "react"
import { connect } from "react-redux"
import { getResaultCode, login } from "../../redux/auth-reducer"
import Login from "./Login"


class LoginContainer extends React.Component{
    


    render(){
        return <Login {...this.props} login={this.props.login} />
    }
    
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    error: state.auth.error,
    email: state.auth.email,
    rememberMe: state.auth.rememberMe,
    id: state.auth.id
})

let mapDispatchToProps = (dispatch) => ({
    login: (email,password,rememberMe) => {
        dispatch(login(email,password,rememberMe))
    }
})





export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
