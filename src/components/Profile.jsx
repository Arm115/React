import other_items from './Profile.module.css'

const Profile = () => {
    return <div className={other_items.content}>
        <div>
            <img width='1270' height='450' src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className='posts'>
                <div className={other_items.item}>
                    post 1
                </div>
                <div className={other_items.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile