import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './logo.jpg';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import Profile from './Profile.js';

class Header extends React.Component {
  render() {
    return (
      <>
        {/* <div id="headerDiv">
          <img width="170px" height="150px" src={logo} alt="My Virtual Trader Logo"></img>
          <h1>My Virtual Trader</h1>
        </div> */}


        <Navbar collapseOnSelect id="entireNavBar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img width="170px" height="150px" src={logo} alt="My Virtual Trader Logo"></img>
              </div>
            </div>
          </div>
          <div id='navItems'>
          <NavItem id="navItemLanding"><Link to="/" className="nav-link" id="landingLink">Home</Link></NavItem>

          <NavItem id="navItemHome"><Link to="/App.js" className="nav-link" id="homeLink">Portfolio</Link></NavItem>

          <NavItem id="navItemAbout"><Link to="/About.js" className="nav-link" id="aboutLink">About Us</Link></NavItem>
          </div>
          <div>
          {this.props.auth0.isAuthenticated ? <Profile /> : <h3>Please Log In</h3>}
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
        </Navbar>
      </>
    )
  }
}

export default withAuth0(Header);
