import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import Profile from './Profile.js';
import logo from './logo.jpg';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect id="entireNavBar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img width="170px" height="150px" src={logo} alt="My Virtual Trader Logo"></img>
              </div>
            </div>
          </div>

          <div id="title"><h1>My Virtual Portfolio</h1></div>
          <div id="itemHolder">
            <NavItem id="navItemLanding"><Link to="/" className="nav-link" id="landingLink">Home</Link></NavItem>

            <NavItem id="navItemHome"><Link to="/App.js" className="nav-link" id="homeLink">Portfolio</Link></NavItem>

            <NavItem id="navItemAbout"><Link to="/About.js" className="nav-link" id="aboutLink">About Us</Link></NavItem>
          </div>
          <div id="personal">
            {this.props.auth0.isAuthenticated && <Profile />}
            {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
        </Navbar>
      </>
    )
  }
}

export default withAuth0(Header);
