import other_items from './Post.module.css'

const Post = (props) => {
    return (
        <div className={other_items.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36DPlGB9gHZ2cGWpOVwu9vfjH3ibtOkrzPg&usqp=CAU' />
            {props.message}
            <div>
                <span>Likes {props.like}</span>
            </div>
        </div>
    )

}



export default Post