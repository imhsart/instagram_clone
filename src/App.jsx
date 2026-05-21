import React, {useState, useEffect} from 'react';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App