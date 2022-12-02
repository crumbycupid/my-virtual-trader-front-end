import React from 'react';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton.js';
import LogoutButton from './Components/LogoutButton.js';
import Profile from './Components/Profile.js';
import Header from './Components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false
    }
  }
  render() {
    return (
      <>
      <Header id="header" />
        
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
          {this.props.auth0.isAuthenticated ? <Profile /> : <h3>Please Log In</h3>}
      
        Hello World

      </>
    );
  }
}

export default withAuth0(App);
