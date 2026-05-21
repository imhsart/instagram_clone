import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import '../styles/Dashboard.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const baseUrl = import.meta.env.VITE_API_BASE_URL


const Dashboard = () => {
  const [zukuData, setZukuData] = useState('')
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const {token, setToken} = useContext(AuthContext)

  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [token])


  useEffect(() => {
    if(token){
      getZukuMessage()
    }
  }, [token])

  async function getZukuMessage(){
      try{
        const response = await axios.get(`${baseUrl}/auth/zuku`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const data = response.data
        setZukuData(data?.data?.message)
        setUser(data?.data?.user?.name)
      }catch(error){
        console.log(error)
      }
    }

  async function handleClick(){
    try{
      const response = await axios.delete(`${baseUrl}/auth/logout`, {
        headers: {
          Authorization : `Bearer ${token}`
        }
      })
      const data = response.data
      setToken('')
      alert(data?.message)
      navigate('/login')
    }catch(error){
      console.log(error)
    }
  }
  
  return (
    <div className='dashboard-container'>
      <div className="navbar">
        <h2>DASHBOARD</h2>
        <button onClick={handleClick} className="logout-btn">Log Out</button>
      </div>
        <h1>Welcome, {user}! </h1>
        <div className='quote-section'>
          <h3>Daily Motivation</h3>
          <div className='quote'>{zukuData}</div>
          </div>
    </div>
  )
}

export default Dashboard