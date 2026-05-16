import React, {useState, useEffect} from 'react'
import LogOut from '../Components/LogOut'
import axios from 'axios'
import '../styles/Dashboard.css'
import { useNavigate } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_API_BASE_URL
//if i change URL on dashboard to signup or login , its going,. ask that how to stop it, because the getzukumessage isnt there , same for signup maybe
//because currently it goes into a loop of 2 useeffects

const Dashboard = ({token}) => {
  const [zukuData, setZukuData] = useState('')
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [])

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

  return (
    <div className='dashboard-container'>
      <LogOut token={token} />
        <h1>Welcome, {user}! </h1>
        <div className='quote-section'>
          <h3>Daily Motivation</h3>
          <div className='quote'>{zukuData}</div>
          </div>
    </div>
  )
}

export default Dashboard