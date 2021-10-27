import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'


const Header = () => {
  return <header className={classes.header}>
    <NavLink to=''><img src='https://www.freelogoservices.com/blog/wp-content/uploads/transparent-logo.jpg' /></NavLink>
  </header>
}

export default Header