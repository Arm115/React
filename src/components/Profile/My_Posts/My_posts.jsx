import other_items from './My_posts.module.css'
import Post from './Post/Post'
const My_posts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className='posts'>
            <Post message='Hi,how are you' image='https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg' like='78'/>
            <Post message='My post' image='http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg' like='20'/>
            <Post image='https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg' like='0'/>
        </div>
    </div>

}

export default My_posts