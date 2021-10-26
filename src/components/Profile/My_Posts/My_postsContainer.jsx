import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext'
import My_posts from './My_posts'



const My_postsContainer = (props) => {
    debugger
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
            
                let updatePostValue = (text) => {
                    store.dispatch(onPostChangeActionCreator(text))
            
                }
                return <My_posts updatePostValue={updatePostValue} addPost={addPost} postsData={state.profile.profile.postsData} newPostValue={state.profile.profile.newPostValue} />
            }
        }
        </StoreContext.Consumer>

    )
}
export default My_postsContainer