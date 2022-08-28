import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
    <div className='container-notice'>
      <p className='par-login'>You can log in and buy items of anime characters</p>
      <button className='btn-log' onClick={() => loginWithRedirect()}>Log in</button>
    </div>
  )
  )}

export { Login };