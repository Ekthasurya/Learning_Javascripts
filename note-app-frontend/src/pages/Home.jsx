import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const handleRegister =()=>{
        navigate("/register")
    }
  return (
    <div>
      <h1>Welcome to Note App</h1>
      <h2>You can proced with the registration process</h2>
      <button onClick={handleRegister}>To Register Click Me!</button>
    </div>
  )
}

export default Home
