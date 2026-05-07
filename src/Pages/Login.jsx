import React from 'react';
import LoginForm from '../Components/LoginForm';

const Login = ({token,setToken}) => {
  return (
    <div>
      <LoginForm token={token} setToken={setToken} />
    </div>
  )
}
export default Login