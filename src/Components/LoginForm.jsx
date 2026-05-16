import React, {useState, useRef, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../styles/LogIn.css'

const baseUrl = import.meta.env.VITE_API_BASE_URL

const LoginForm = ({token, setToken}) => {

  const loginUser = {
    emailRef: useRef(),
    passRef: useRef()
  }
  const navigate = useNavigate()
  let {emailRef, passRef} = loginUser

  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [])

  //a use effect here in case if token is present and only the link changes (like from dashboard to login) stay in dashboard. that functionality needa ask

  function handleSubmit(e){
    e.preventDefault()

    axios.post(`${baseUrl}/auth/login`, {email: emailRef.current.value, password: passRef.current.value}, {'token': token})
    .then(res => {
      setToken(res?.data?.data?.token)
      emailRef.current.value = ''
      passRef.current.value = ''
      alert(res?.data?.message)
      navigate('/dashboard')
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
      <div className="goto-signup">
        <p>Don't have an account? <Link to='/'>Sign Up here</Link></p>
      </div>
    </div>
  )
}
export default LoginForm