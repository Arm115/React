import modules from './ProfileInfo.module.css'
import usersPhotoDefault from './../../../assets/images/usersDefaultPhoto.jpg'
import Preloader from './../../common/Preloader/Preloader'
import preloader from './../../../assets/images/Rocket.gif'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    
    if(!props.userProfile){
        return (
            <div>
                <h1>Чтоб посмотреть что здесь есть нужно залогинится</h1>
                <div><img src={preloader} className={modules.preloader}/></div>
            </div>
            )
    }


    return (
        <div>
            {/* <div>
                <img className={modules.content_image} src={props.content_image}/>
            </div> */}
            <div>
                <img className={modules.ava_image} src={props.userProfile.photos.large != null ? props.userProfile.photos.large : usersPhotoDefault} /><br/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <p className={modules.spans}>{props.userProfile.fullName}</p>
                <p className={modules.spans}>{props.userProfile.aboutMe != null ? props.userProfile.aboutMe : 'Я обычный пользователь этой социальной сети'}</p>
            </div>
            
        </div>
    )
}

export default ProfileInfo