import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { getMyProfileThunk } from "../../redux/navbar-reducer"
import Navbar from "./Navbar"



class NavbarContainer extends React.Component{
    componentDidMount(){
        this.props.getMyProfileThunk()
    }

    render(){
        return <Navbar {...this.props} id={this.props.id} currentPage={this.props.currentPage}/>
    }
}


let mapStateToProps = (state) => ({
    friends: state.navbar.navbar.friends,
    id: state.navbar.id,
    currentPage: state.users.currentPage
})




let NavbarContainerUrl = withRouter(NavbarContainer)

export default connect(mapStateToProps,{getMyProfileThunk})(NavbarContainerUrl)