import other_items from './My_posts.module.css'
import Post from './Post/Post'
import React from 'react'



const My_posts = (props) => {

    let postElements = props.postsData.map(post => <Post message={post.message} like={post.likesCount} />)


    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (event) => {
        let newText = event.target.value
        props.updatePostValue(newText)
    }
    
    return <div className={other_items.PostsBlock}>
        <h3>
            My posts
        </h3>
        <div>
            <textarea onChange={onPostChange} value={props.newPostValue}></textarea>
            <button onClick={ addPost } >Add post</button>
        </div>
        <div className='posts'>
            {postElements}
        </div>
    </div>

}

export default My_posts