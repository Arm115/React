import './App.css';
import React from 'react'
import Header from  './components/Header/Header' 
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import My_posts from './components/Profile/My_Posts/My_posts';

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
