import My_postsContainer from './My_Posts/My_postsContainer'
import Post from './My_Posts/Post/Post'
import modules from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    

    
    return <div>
        <ProfileInfo 
         userProfile={props.userProfile}
         updateStatus={props.updateStatus}
         status={props.status}
         content_image='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'/>
        <My_postsContainer />
    </div>
}

export default Profile