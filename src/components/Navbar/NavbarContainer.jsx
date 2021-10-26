import classes from './Navbar.module.css'
import Navbar from './Navbar'
import { connect } from 'react-redux'





let mapStateToProps = (state) => {
    return {
        friends: state.navbar.navbar.friends
    }
}

let mapDispatchToProps = (dispatch) => {

}


const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)

export default NavbarContainer