import { Field, Form } from 'react-final-form'
import * as yup from 'yup'
import modules from './Login.module.css'

const LoginForm = (props) => {
    

    const initialData = {
        login: '',
        password: '',
        rememberMe: false
    }


    const onSubmit = (e) => {

        e.login = ''
        e.password = ''
    }

    const validate = (e) => {
        
        const error = {}

        if(e.login && e.login.length < 8){
            error.login = 'Слишком короткий'
        }if(e.login && e.login.length > 12){
            error.login = 'Слишком длинный'
        }
        return error
    }

    return <Form
    onSubmit={onSubmit}
    validate={validate}
    initialValues={initialData}
    render={({ handleSubmit }) => (
        <form className={modules.login_form} onSubmit={handleSubmit}>
            <div>
                <div>
                <label>Login</label><br />
                <Field
                name='login'
                render={({ input, meta }) => (
                    <div>
                        <input name='login' {...input} type='text' placeholder='Login'/>
                        {meta.touched && meta.error && <div className={modules.reject}>{meta.error}</div>}
                    </div>
                )}
                 /></div>
                <label>Password</label><br />
                <div><Field name='password' component='input' placeholder='Password' type='password'/></div>
                <div className={modules.rememberMe}>
                    <Field name='rememberMe' component='input' type='checkbox'/>
                    Remember Me
                    
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )}
/>
}

const Login = (props) => {



    return (
        <div>
            {props.isAuth ?
                <h1>You are succsefully logined</h1>
                :
                <LoginForm />

            }
        </div>
    )
}

export default Login