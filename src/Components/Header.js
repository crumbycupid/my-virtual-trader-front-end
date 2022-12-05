import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './logo.jpg';

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
                <h1 className="animate-charcter">My Virtual Trader</h1>
              </div>
            </div>
          </div>
          <NavItem id="navItemLanding"><Link to="/landingPage.js" className="nav-link" id="landingLink">Home</Link></NavItem>

          <NavItem id="navItemHome"><Link to="/" className="nav-link" id="homeLink">Portfolio</Link></NavItem>

          <NavItem id="navItemAbout"><Link to="/About.js" className="nav-link" id="aboutLink">About Us</Link></NavItem>
        </Navbar>
      </>
    )
  }
}

export default Header;
