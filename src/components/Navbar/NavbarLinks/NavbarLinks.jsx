import { NavLink } from 'react-router-dom'
import modules from './NavbarLinks.module.css'

const NavbarLinks = (props) => {
    return (
        <div className={modules.item}>
            <NavLink to={`/${props.link}`} activeClassName={modules.active}>{props.message}</NavLink>
        </div>
    )
}

export default NavbarLinks