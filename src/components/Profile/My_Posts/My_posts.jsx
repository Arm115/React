import other_items from './My_posts.module.css'
import Post from './Post/Post'
import postData from './../../../index'

const My_posts = (props) => {


    
    let postElements = props.postData.map(post => <Post message={post.message} like={post.likesCount} />)


    return <div className={other_items.PostsBlock}>
        <h3>
            My posts
        </h3>
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className='posts'>
            {postElements}
        </div>
    </div>

}

export default My_posts