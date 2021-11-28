import { Field, Form } from 'react-final-form'
import { Element } from '../../hoc/GetElement'
import {minLength, required } from '../../utils/validator'
import modules from './Login.module.css'
import { Redirect } from "react-router";
import Button from './../common/Button/Button'
import { OnChange } from 'react-final-form-listeners'




export const LoginForm = (props) => {
    

    let minLength8 = minLength(8)


    const initialData = {
        email: '',
        password: '',
        rememberMe: false
    }





    const onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe)


    }

    
    let wrongError = props.error
    const validate = (values) => {

        const error = {}



        error.email = required(values.email)
        error.password = required(values.password)
        if (values.email && values.email.length > 20) {
            error.email = 'Максимальное количество символов 20'
        }
        if(wrongError === false){
            error.password = 'Неверный логин или пароль'
        }
        


        return error
    }


   

    const Input = Element("input")
    



    return (
        
        
        <div>

            <div>
                <h3>You can register <a href='https://social-network.samuraijs.com/' target='_blank'>Here</a></h3>
            </div>

            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={initialData}
                render={({ handleSubmit }) => (
                    <form className={modules.login_form} onSubmit={handleSubmit}>
                        <div>
                            <div className={(wrongError ? "" : modules.email_error)}>
                                <label>Login</label><br />
                                <Field
                                    name='email'
                                    validate={minLength8}
                                    component={Input}
                                    placeholder='Login'
                                    
                                />
                                <OnChange name='email'>
                                    {() => {
                                        props.errorFunc(true)
                                    }}

                                </OnChange>
                                
                                </div>
                            <label>Password</label><br />
                            <div >
                                <Field
                                    name='password'
                                    render={Input}
                                    type='password'
                                    placeholder='Password'
                                />
                                <OnChange name='password'>
                                    {() => {
                                        props.errorFunc(true)
                                    }}

                                </OnChange>
                                </div>
                            <div className={modules.rememberMe}>
                                <Field name='rememberMe' component='input' type='checkbox' />
                                Remember Me
                            </div>
                            <Button type='submit'>Login</Button>
                        </div>
                        
                    </form>
                )}
            />
        </div>
    )
}

const Login = (props) => {
    return (
        <div>
            {props.isAuth ?
                <Redirect to={'/profile/' + props.id} />
                :
                <LoginForm {...props} login={props.login} newValue={props.newValue} errorFunc={props.errorFunc}/>

            }
        </div>
    )
}

export default Login