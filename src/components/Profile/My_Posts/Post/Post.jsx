import other_items from './Post.module.css'
import usersPhotoDefault from './../../../../assets/images/usersDefaultPhoto.jpg'
import preloader from './../../../../assets/images/Rocket.gif'

const Post = (props) => {
    

    return (
        <div className={other_items.item}>
            <img src={usersPhotoDefault} />
            {props.message}
            <div>
                <span>Likes {props.like}</span>
            </div>
        </div>
    )

}



export default Post