import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer'
import My_posts from './My_posts'
import Post from './Post/Post'




let mapStateToProps = (state) => {

    return {
        postsData: state.profile.profile.postsData,
        newPostValue: state.profile.profile.newPostValue,
        userProfile: state.profile.userProfile

    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostValue: (text) => {
            dispatch(onPostChangeActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const My_postsContainer = connect(mapStateToProps, mapDispatchToProps)(My_posts)

export default My_postsContainer