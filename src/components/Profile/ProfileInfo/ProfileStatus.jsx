import modules from './ProfileInfo.module.css'
import usersPhotoDefault from './../../../assets/images/usersDefaultPhoto.jpg'
import React from 'react'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
        this.props.updateStatus(this.state.status)
    }
    deActivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode && 
                <div>
                    <span className={modules.spans} onDoubleClick={this.activateEditMode}>{this.props.status ?  this.props.status : 'Нет статуса'}</span>
                </div>
                }
                {this.state.editMode && 
                <div>
                    <input onChange={this.onStatusChange} className={modules.spans} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus