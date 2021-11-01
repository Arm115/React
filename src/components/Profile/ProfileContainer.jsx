import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setProfileUsers, setUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'



class ProfileContainer extends React.Component {
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/20416`)
        .then(response => {
            
            this.props.setProfileUsers(response.data)
            
            
        })
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


export default connect(mapStateToProps,{setProfileUsers})(ProfileContainer)