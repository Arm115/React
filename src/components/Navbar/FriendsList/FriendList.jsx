import modules from './FriendList.module.css'
import classes from './../Navbar.module.css'
import { NavLink } from 'react-router-dom'


const FriendsList = (props) => {


    return (
        <div className={modules.friendsListItems}>
            <img src={props.img} />
            <NavLink to={'/profile/' + props.id} >{props.name}</NavLink>
        </div>
    )
}


export default FriendsList