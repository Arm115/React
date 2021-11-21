import { Field, Form } from 'react-final-form'
import { Element } from '../../hoc/GetElement'
import {minLength,required} from '../../utils/validator'
import modules from './Login.module.css'





const LoginForm = (props) => {

    
    const Input = Element("input")

    let minLength8 = minLength(8)


    const initialData = {
        login: '',
        password: '',
        rememberMe: false
    }


    const onSubmit = (e) => {

        e.login = ''
        e.password = ''
    }

    const validate = (values) => {
        const error = {}

        

        error.login = required(values.login)
        if(values.login && values.login.length > 16){
            error.login = 'Максимальное количество символов 16'
        }

        error.password = required(values.password)

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
                            validate={minLength8}
                            component={Input}
                            placeholder='Login'
                        /></div>
                    <label>Password</label><br />
                    <div>
                        <Field
                            name='password'
                            render={Input}
                            type='password'
                            placeholder='Password'
                        /></div>
                    <div className={modules.rememberMe}>
                        <Field name='rememberMe' component='input' type='checkbox' />
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