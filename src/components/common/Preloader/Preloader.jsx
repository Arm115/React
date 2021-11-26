import preloader from './../../../assets/images/Rocket.gif'
import modules from './../../Users/Users.module.css'

let Preloader = (props) => {
    return <div><img src={preloader} className={modules.preloader} {...props}/></div>
}


export default Preloader