import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { getMyProfile, profileAPI } from "../../api/api"
import { getMyProfileThunk, getUserId } from "../../redux/navbar-reducer"
import Navbar from "./Navbar"



class NavbarContainer extends React.Component{
    componentDidMount(){
        this.props.getMyProfileThunk()
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

export default connect(mapStateToProps,{getUserId, getMyProfileThunk})(NavbarContainerUrl)