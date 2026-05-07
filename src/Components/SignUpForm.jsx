import React, {useState, useRef} from 'react'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_BASE_URL

const SignUpForm = ({setToken}) => {
  const user = {
    nameRef :useRef(),
    emailRef : useRef(),
    passRef : useRef(),
    cpassRef : useRef()
  }
  const [showResult, setShowResult] = useState(false)

  let {nameRef, emailRef, passRef, cpassRef} = user

  function handleSubmit(e){
    e.preventDefault()

    axios.post(`${baseUrl}/auth/signup`, {name:nameRef.current.value, email: emailRef.current.value, password: passRef.current.value})
    .then(res => {
      console.log(res.data)
      setShowResult(true)
      setToken(res.data.data.token)
      nameRef.current.value =''
      emailRef.current.value =''
      passRef.current.value =''
      cpassRef.current.value =''
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
      {showResult && <h2>User signed in successfully</h2>}
    </div>
  )
}

export default SignUpForm