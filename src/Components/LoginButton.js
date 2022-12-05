import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './LogoutButton.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button class="custom-btn btn-13" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;