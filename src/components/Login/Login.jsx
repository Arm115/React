

const Login = (props) => {
    return (
        <div>
            {props.isAuth ?
                 <h1>You are succsefully logined</h1>
                 :<h1>Register and Login <a href='https://social-network.samuraijs.com/' target='_blank'>Here</a></h1>
                
            }
        </div>
    )
}

export default Login