import React, {useState, useRef} from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL

const LoginForm = ({token, setToken}) => {

  const loginUser = {
    emailRef: useRef(),
    passRef: useRef()
  }
  const [showLogin, setShowLogin] = useState(false)

  let {emailRef, passRef} = loginUser

  function handleSubmit(e){
    e.preventDefault()

    axios.post(`${baseUrl}/auth/login`, {email: emailRef.current.value, password: passRef.current.value}, {'token': token})
    .then(res => {
      console.log(res.data.data)
      setShowLogin(true)
      setToken(res.data.data.token)
      emailRef.current.value = ''
      passRef.current.value = ''
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef}></input>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passRef}></input>
        <button type="submit" id="login-btn">Log In</button>
      </form>
      {showLogin && <h2>Logged in successfully</h2>}
    </div>
  )
}
export default LoginForm