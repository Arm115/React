import other_items from './My_posts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Field, Form } from 'react-final-form'



const My_posts = (props) => {


    let postElements = props.postsData.map(post => <Post message={post.message} like={post.likesCount} />)

    let onSubmit = (values) => {
        props.addPost(values.addPostText)
    }

    let validate = (e) => {

    }




    return <div className={other_items.PostsBlock}>
        <h3>
            My posts
        </h3>
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name='addPostText' render={({ input, meta }) => (
                        <div>
                            <div>
                                <textarea {...input} placeholder='Enter your message'></textarea>
                                {meta.error && <p>{meta.error}</p>}
                            </div>
                            <div><button type='submit'>Send message</button></div>
                        </div>

                    )} />
                </form>
            )}
                /><br />
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