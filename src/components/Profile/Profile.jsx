import My_posts from './My_Posts/My_posts'
import other_items from './Profile.module.css'

const Profile = (props) => {
    return <div>
        <div>
            <img width='1270' height='450' src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
        </div>
        <div className={other_items.info}>
            <img src='https://rlab.me/wp-content/uploads/2017/09/sozdat-avatar-dlya-youtube-sharg.png' />
            <span>Имя: </span>
            <span>Имя: </span>
            <span>Имя: </span>
            <span>Имя: </span>
        </div>
        <My_posts />
    </div>
}

export default Profile