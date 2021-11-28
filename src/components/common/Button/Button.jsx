import styles from './Button.module.css'

const Button = (props) => {
    return (
        <div>
            <button type='submit' className={styles.sendButton} {...props}>Login</button>
        </div>
    )
}

export default Button