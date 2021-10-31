import preloader from './../../../assets/images/Rocket.gif'
import modules from './../../Users/Users.module.css'

let Preloader = (props) => {
    <div><img src={preloader} className={modules.preloader}/></div>
}


export default Preloader