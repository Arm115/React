import other_items from './My_posts.module.css'
import Post from './Post/Post'
import React from 'react'

const My_posts = (props) => {


    
    let postElements = props.state.map(post => <Post message={post.message} like={post.likesCount} />)

    let newPostElement = React.createRef(); 

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = '';
    }
    
    return <div className={other_items.PostsBlock}>
        <h3>
            My posts
        </h3>
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={ addPost }>Add post</button>
        </div>
        <div className='posts'>
            {postElements}
        </div>
    </div>

}

export default My_posts