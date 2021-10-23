import './App.css';
import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


// import testubg from './../public/testubg'



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        
        <Route path='' render={() => <Navbar state={props.state.navbar}/>}/>
        
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogs} dispatch={props.dispatch}/>}/> {/* exact */}
          <Route path='/profile' render={() => <Profile state={props.state.profile } dispatch={props.dispatch}/>} />
          <Route path='/news' render={() => <News />}/>
          <Route path='/music' render={() => <Music />}/>
          <Route path='/settings' render={() => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


// export default Technologies;


export default App;
