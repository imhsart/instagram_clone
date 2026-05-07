import React from 'react'
import SignUpForm from '../Components/SignUpForm'

const SignUp = ({setToken}) => {

  return (
    <div>
      <SignUpForm setToken={setToken} />
    </div>
  )
}

export default SignUp