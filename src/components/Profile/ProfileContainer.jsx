import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { getProfileThunk, setProfileUsers} from '../../redux/profile-reducer'
import Profile from './Profile'


class ProfileContainer extends React.Component {
    componentDidMount(){
        
        let id = this.props.match.params.id

        if(!id){
            id = 2
        }
        this.props.getProfileThunk(id)
    }



    render() {
        return <div>
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        </div>
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


let mapStateToProps = (state) => ({
    userProfile: state.profile.userProfile,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps,{setProfileUsers,getProfileThunk})(WithUrlDataContainerComponent)