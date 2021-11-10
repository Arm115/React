import './App.css';
import React from 'react'
import Header from './components/Header/Header'
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';



// import testubg from './../public/testubg'



const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />

      <Route path='' render={() => <NavbarContainer />} />

      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} /> {/* exact */}
        <Route path='/profile/:id?' render={() => <ProfileContainer/>} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/login' render={() => <LoginContainer />} />
      </div>
    </div>
  );
}


// export default Technologies;


export default App;
