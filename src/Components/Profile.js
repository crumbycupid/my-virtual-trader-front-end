import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.jpg'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <img src={logo} alt="My Virtual Trader Logo" width="170px" height="150px"/> */}
        <h4>{user.name}</h4>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;