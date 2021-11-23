import other_items from './My_posts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { required } from '../../../utils/validator'
import { Element } from '../../../hoc/GetElement'


const MyPostsForm = (props) => {

    const TextArea = Element("textarea")

    let onSubmit = (values) => {
        props.addPost(values.addPostText)
        values.addPostText = ''
    }

    let validate = (values) => {
        const error = {}

        error.addPostText = required(values.addPostText)

        return error
    }

    

    return <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <Field
            name='addPostText'
            component={TextArea}
            placeholder='Add post'
            />
            <button >Send</button>
        </form>
    )}
        />
}


const My_posts = (props) => {


    let postElements = props.postsData.map(post => <Post message={post.message} like={post.likesCount} />)




    return <div className={other_items.PostsBlock}>
        <h3>
            My posts
        </h3>
        <MyPostsForm addPost={props.addPost}/><br />
        <div className='posts'>
            {postElements}
        </div>
    </div>

}

{/* <div>
    <textarea onChange={onPostChange} value={props.newPostValue}></textarea>
    <button onClick={addPost} >Add post</button>
</div> */}



export default My_posts