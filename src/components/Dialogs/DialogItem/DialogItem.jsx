import modules from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem