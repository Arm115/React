import My_posts from './My_Posts/My_posts'
import other_items from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { postData } from '../../index'


const Profile = (props) => {

    

    return <div>
        <ProfileInfo  content_image='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' ava_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36DPlGB9gHZ2cGWpOVwu9vfjH3ibtOkrzPg&usqp=CAU'/>
        <My_posts postData={postData}/>
    </div>
}

export default Profile