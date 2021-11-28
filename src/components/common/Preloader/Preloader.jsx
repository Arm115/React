import preloader from './../../../assets/images/Rocket.gif'
import modules from './../../Users/Users.module.css'
import styles from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={styles.circle_content}>
            {/* <div><img src={preloader} className={modules.preloader} {...props} /></div> */}
            <div className={styles.circle}></div>
        </div>
    )
}


export default Preloader