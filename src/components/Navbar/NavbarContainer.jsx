import classes from './Navbar.module.css'
import Navbar from './Navbar'
import StoreContext from '../../StoreContext'


const NavbarContainer = (props) => {


    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                return <Navbar friends={state.navbar.navbar.friends} />
            }
        }

        </StoreContext.Consumer>


    )
}

export default NavbarContainer