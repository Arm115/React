import other_items from './My_posts.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/state'



const My_posts = (props) => {
    
    
    let postElements = props.state.map(post => <Post message={post.message} like={post.likesCount} />)

    let newPostElement = React.createRef(); 

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(newText))
    }
    
    return <div className={other_items.PostsBlock}>
        <h3>
            My posts
        </h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostValue}></textarea>
            <button onClick={ addPost } >Add post</button>
        </div>
        <div className='posts'>
            {postElements}
        </div>
    </div>

}

export default My_posts