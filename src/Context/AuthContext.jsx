import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(() => JSON.parse(localStorage.getItem('token')) || '')

  useEffect(() => {
    if(token){
      localStorage.setItem('token', JSON.stringify(token))
    }else{
      localStorage.removeItem('token')
    }
  }, [token])

  return (
    <AuthContext.Provider value={{token, setToken}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider