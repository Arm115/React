import './App.css';
import React from 'react'
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
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withAuthRedirect } from './hoc/AuthRedirect';


class App extends React.Component {
  
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized && this.props.initialized === false) {
      return <Preloader  />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />

        <Route path='' render={() => <NavbarContainer />} />

        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:id?' render={() => <ProfileContainer />} />
          <Route path='/users/:currentPage' render={() => <UsersContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    );

  }

}




const mapStateToProps = (state) => ({
  initialized: state.app.initialized

})

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App)

