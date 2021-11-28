import { loginAPI, profileAPI } from "../api/api"


const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'
const SET_AUTH_FALSE = 'SET_AUTH_FALSE'

let initialState = {
    email: null,
    id: null,
    login: null,
    password: null,
    isAuth: false,
    error: true,
    

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {

                ...state,
                ...action.data,
            }
        case SET_AUTH_FALSE:
            return {
                ...state,
                isAuth: action.isAuth,
                email:action.email,
                id:action.id,
                login:action.login
            }

        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }


        default:
            return state
    }


}



export const setUserData = (email, id, login, isAuth) => ({ type: SET_USER_DATA, data: { email, id, login, isAuth} })
export const setAuthData = (isAuth, email, id, login) => ({ type: SET_AUTH_FALSE, isAuth, email, id, login })
export const setErrorData = (error) => ({ type: SET_ERROR, error })

export const authThunk = () => {
    return (dispatch) => {
        profileAPI.getMyProfile().then(response => {

            if (response.data.resultCode === 0) {
                let { email, id, login } = response.data.data
                dispatch(setUserData(email, id, login, true))
            }

        })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    loginAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authThunk())
            dispatch(setErrorData(true))
        }if(response.data.resultCode === 1){
            dispatch(setErrorData(false))
            
        }

    }



    )

}

export const logout = () => {
    return (dispatch) => {
        loginAPI.logout()
            .then(response => {


                if (response.data.resultCode === 0) {
                    dispatch(setAuthData(false, null, null, null))
                }

            })
    }
}



export default authReducer