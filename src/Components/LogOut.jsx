import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL

const LogOut = ({token}) => {
  const navigate = useNavigate()

  async function handleClick(){
    try{
      const response = await axios.delete(`${baseUrl}/auth/logout`,  {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      const data = response.data
      localStorage.removeItem('token')
      alert(data?.message)
      navigate('/login')
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="navbar">
      <h2>DASHBOARD</h2>
      <button onClick={handleClick} className="logout-btn">Log Out</button>
    </div>
  )
}

export default LogOut