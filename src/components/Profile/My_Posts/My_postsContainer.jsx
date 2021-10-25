import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer'
import My_posts from './My_posts'



const My_postsContainer = (props) => {
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let updatePostValue = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
        
    }
    
    return (<My_posts updatePostValue={updatePostValue} addPost={addPost} postsData={props.store.getState().profile.profile.postsData} newPostValue={props.store.getState().profile.profile.newPostValue}/>)

}

export default My_postsContainer