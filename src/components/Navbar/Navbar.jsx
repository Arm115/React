import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import NavbarLinks from './NavbarLinks/NavbarLinks'
import FriendsList from './FriendsList/FriendList'
import { Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap'



const Navbar = (props) => {
    let FriendsElements = props.friends.map(friend => <FriendsList img={friend.img} id={friend.id} name={friend.name} />)



    return (
        <div className={classes.nav}>
            <nav className={classes.nav}>
                <NavbarLinks link={'profile/' + props.id} message='Profile' />
                <NavbarLinks link='dialogs' message='Messages' />
                <NavbarLinks link='news' message='News' />
                <NavbarLinks link='music' message='Music' />
                <NavbarLinks link='settings' message='Settings' />
                <NavbarLinks link={'users/' + props.currentPage} message='Find Users' />
            </nav>
            <div className={classes.friendsList}>
                <h1>
                    Friends
                </h1>
                <div className={classes.friendsLists}>
                    {FriendsElements}
                </div>


            </div>
        </div>)
}

export default Navbar