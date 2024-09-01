import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const handleLogin = async()=>{
        const payload = {
            email,
            password
        }
        try {
           const response = await fetch("https://devnotes-7z9t.onrender.com/user/login",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if(data.token){
                localStorage.setItem("token",data.token);
                alert(data.message);
                navigate("/notes");
            }
        } catch (error)
        {
            alert(`An error occurred ${error}`)
        }
    }
  return (
    <div>
       <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
       <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
       <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
