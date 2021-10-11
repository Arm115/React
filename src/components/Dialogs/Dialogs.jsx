import { NavLink } from 'react-router-dom'
import modules from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={modules.dialogs}>
            <div className={modules.dialogsItems}>
                <div className={modules.dialog + ' ' + modules.active}>
                    <NavLink to='/dialogs/1'>
                        Dima
                    </NavLink>
                </div>
                <div className={modules.dialog}>
                    <NavLink to='/dialogs/2'>
                        Viktoria
                    </NavLink>
                </div>
                <div className={modules.dialog}>
                    <NavLink to='/dialogs/3'>
                    Andrey
                    </NavLink>
                </div>
                <div className={modules.dialog}>
                    <NavLink to='/dialogs/4'>
                    Valera
                    </NavLink>
                </div>
                <div className={modules.dialog}>
                    <NavLink to='/dialogs/5'>
                    Vlad
                    </NavLink>
                </div>


            </div>
            <div className={modules.messages}>
                <div className={modules.message}>Hi</div>
                <div className={modules.message}>How are you?</div>
                <div className={modules.message}>Good bye</div>
            </div>
        </div>
    )
}

export default Dialogs