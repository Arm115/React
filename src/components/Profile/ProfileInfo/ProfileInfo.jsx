import modules from './ProfileInfo.module.css'
import usersPhotoDefault from './../../../assets/images/usersDefaultPhoto.jpg'
import Preloader from './../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    
    if(!props.userProfile){
        return (
            <div>
                <Preloader />
            </div>
            )
    }


    return (
        <div>
            <div>
                <div className={modules.profile_content}>
                    <div className={modules.user_ava}>
                        <img className={modules.ava_image} src={props.userProfile.photos.large != null ? props.userProfile.photos.large : usersPhotoDefault} /><br/>
                    </div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <p className={modules.spans}>{props.userProfile.fullName}</p>
                    <p className={modules.spans}>{props.userProfile.aboutMe != null ? props.userProfile.aboutMe : 'Я обычный пользователь этой социальной сети'}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileInfo