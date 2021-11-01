import modules from './ProfileInfo.module.css'
import usersPhotoDefault from './../../../assets/images/usersDefaultPhoto.jpg'
import Preloader from './../../common/Preloader/Preloader'
import preloader from './../../../assets/images/Rocket.gif'

const ProfileInfo = (props) => {
    if(!props.userProfile){
        return <div><img src={preloader} className={modules.preloader}/></div>
    }


    return (
        <div>
            <div>
                <img className={modules.content_image} src={props.content_image}/>
            </div>
            <div>
                <img className={modules.ava_image} src={props.userProfile.photos.small != null ? props.userProfile.photos.small : usersPhotoDefault} />
            </div>
            
        </div>
    )
}

export default ProfileInfo