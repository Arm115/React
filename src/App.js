import './App.css';
import React from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
// import testubg from './../public/testubg'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />

    </div>
  );
}


// export default Technologies;


export default App;
