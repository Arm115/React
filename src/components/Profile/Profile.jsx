import My_posts from './My_Posts/My_posts'
import other_items from './Profile.module.css'

const Profile = () => {
    return <div className={other_items.content}>
        <div>
            <img width='1270' height='450' src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <My_posts />
    </div>
}

export default Profile