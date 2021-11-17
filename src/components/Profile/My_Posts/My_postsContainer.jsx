import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
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
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(My_posts)

