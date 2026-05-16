import React, {useState, useRef} from 'react'
import axios from 'axios'
import '../styles/SignUp.css'
import { useNavigate, Link } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_API_BASE_URL

const SignUpForm = ({setToken}) => {
  const user = {
    nameRef :useRef(),
    emailRef : useRef(),
    passRef : useRef(),
    cpassRef : useRef()
  }
  const navigate = useNavigate()

  let {nameRef, emailRef, passRef, cpassRef} = user

  function handleSubmit(e){
    e.preventDefault()

    axios.post(`${baseUrl}/auth/signup`, {name:nameRef.current.value, email: emailRef.current.value, password: passRef.current.value})
    .then(res => {
      setToken(res?.data?.data?.token)
      alert(res?.data?.message)
      nameRef.current.value =''
      emailRef.current.value =''
      passRef.current.value =''
      cpassRef.current.value =''
      navigate('/dashboard')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <form className='signup-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' ref={nameRef}></input>
        <label htmlFor='email'>Email:</label>
        <input id='email' type='email' ref={emailRef}></input>
        <label htmlFor='pass'>Password:</label>
        <input id='pass' type='password' ref={passRef}></input>
        <label htmlFor='cpass'>Confirm Password:</label>
        <input id='cpass' type='password' ref={cpassRef}></input>
        <button type='submit' id='signup-btn'>Sign Up</button>
      </form>
      <div className="goto-login">
        <p>Already have an account? <Link to='/login'>Log In here</Link></p>
      </div>
    </div>
  )
}

export default SignUpForm