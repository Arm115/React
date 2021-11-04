import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { getUserId } from "../../redux/navbar-reducer"
import Navbar from "./Navbar"

class NavbarContainer extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials:true
        }).then(response => {

            
            if(response.data.resultCode === 0){
                this.props.getUserId(response.data.data.id)
            }
            
        })
    }

    render(){
        return <Navbar {...this.props} id={this.props.id}/>
    }
}


let mapStateToProps = (state) => ({
    friends: state.navbar.navbar.friends,
    id: state.navbar.id
})



let NavbarContainerUrl = withRouter(NavbarContainer)

export default connect(mapStateToProps,{getUserId})(NavbarContainerUrl)