import My_postsContainer from './My_Posts/My_postsContainer'
import modules from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    return <div>
        <ProfileInfo  content_image='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' ava_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36DPlGB9gHZ2cGWpOVwu9vfjH3ibtOkrzPg&usqp=CAU'/>
        <My_postsContainer store={props.store}/>
    </div>
}

export default Profile