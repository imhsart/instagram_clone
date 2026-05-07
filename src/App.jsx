import React, {useState} from 'react';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import './styles/App.css'

const App = () => {
  const [token, setToken] = useState('')

  return (
    <div>
      <SignUp setToken={setToken} />
      <Login token={token} setToken={setToken} />
    </div>
  )
}

export default App