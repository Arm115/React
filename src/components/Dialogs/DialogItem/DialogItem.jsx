import modules from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div>
            <div className={modules.item}>
                <img src={props.avatar} />
                <NavLink to={'/dialogs/' + props.id}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}

export default DialogItem