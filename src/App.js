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


// import testubg from './../public/testubg'



const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />

      <Route path='' render={() => <NavbarContainer />} />

      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} /> {/* exact */}
        <Route path='/profile' render={() => <ProfileContainer/>} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}


// export default Technologies;


export default App;
