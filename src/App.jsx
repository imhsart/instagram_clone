import React, {useState, useEffect} from 'react';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

const App = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    let savedToken = JSON.parse(localStorage.getItem('token'))
    if(savedToken){
      setToken(savedToken)
    }
  }, [])

  useEffect(() => {
    if(token){
      localStorage.setItem('token', JSON.stringify(token))
    }
  }, [token])

  return (
    <Routes>
      <Route path='/' element={<SignUp setToken={setToken} />} />
      <Route path='/login' element={<Login token={token} setToken={setToken} />} />
      <Route path='/dashboard' element={<Dashboard token={token} />} />
    </Routes>
  )
}

export default App