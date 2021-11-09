import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getProfile, profileAPI} from '../../api/api'
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


let mapStateToProps = (state) => ({
    userProfile: state.profile.userProfile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setProfileUsers,getProfileThunk})(WithUrlDataContainerComponent)