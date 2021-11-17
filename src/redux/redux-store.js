import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer,
    users: usersReducer,
    auth: authReducer,

})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store



export default store