import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { getAboutMe, getProfileThunk, getStatus, setProfileUsers, updatePhoto, updateStatus} from '../../redux/profile-reducer'
import { getProfileStatus, getUserProfile } from '../../redux/selectors/profile-selectors'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount(){
        
        let id = this.props.match.params.id


        this.props.getProfileThunk(id)
        this.props.getStatus(id)
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.props.getProfileThunk(this.props.match.params.id)
            this.props.getStatus(this.props.match.params.id)

        }

    }


    render() {
        return <div>
            <Profile {...this.props} 
            userProfile={this.props.userProfile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            updatePhoto={this.props.updatePhoto}
            />
        </div>
    }
}





let mapStateToProps = (state) => ({
    userProfile: getUserProfile(state),
    status: getProfileStatus(state),
})

export default compose(
    connect(mapStateToProps,{setProfileUsers,getProfileThunk,getStatus,updateStatus,updatePhoto}),
    withAuthRedirect,
    withRouter,

)(ProfileContainer)

