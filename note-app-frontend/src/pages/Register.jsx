import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [gender,setGender]=useState("");
    const [age,setAge]=useState("");

    const handleSubmit = async()=>{
        const payload ={
            name,
            email,
            password,
            gender,
            age
        }
        try {
            await fetch("https://devnotes-7z9t.onrender.com/user/register",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(payload)
            });
            alert("User registered successfully");
            navigate("/login");
        } catch (error)
        {
            alert(`An error occurred ${error}`)
        }
    }
  return (
    
    <div>
      <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <input type="text" placeholder='Enter Gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
      <input type="text" placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Register
