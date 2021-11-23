import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'


const Header = (props) => {




  return <header className={classes.header}>
    <NavLink to=''><img src='https://www.freelogoservices.com/blog/wp-content/uploads/transparent-logo.jpg' /></NavLink>
    <div className={classes.login_block}>
      {props.isAuth
        ?
        <div>
          <span className={classes.user_login}>{props.login}</span><br />
          <button type='submit' onClick={props.logout}>Logout</button>
        </div>
        :
        <NavLink to={'/login/'}>Login</NavLink>
      }
    </div>
  </header>
}

export default Header