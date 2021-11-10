import { connect } from "react-redux"
import Login from "./Login"




let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})



let mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps,mapDispatchToProps)(Login)