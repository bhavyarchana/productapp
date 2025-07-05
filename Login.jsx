import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const[input,setInput] = useState({Email:"",Password:""})
  const navigate = useNavigate()

  const inputHandler =(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const loginHandler=() =>{
    console.log("clicked")
    axios.post("http://localhost:3000/login",input)
    .then((res)=>{
      alert(res.data.message)
      console.log(res.data)
      if(res.data.message === "logged in successfully"){
        localStorage.setItem('user',JSON.stringify({
        email: res.data.email,
        name: res.data.name,
        userType: res.data.userType,
        id: res.data.userId
        }))
          if(res.data.userType  === "admin"){
               navigate('/admin')
          }
          else{
                navigate('/user')
          }
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
    <Typography variant='h4'>Log In</Typography>
    <TextField label="E-mail" name="Email" variant="outlined" value={input.Email} onChange={inputHandler} /><br/><br/>
    <TextField  label="password"  name="Password" variant="outlined" value={input.Password} onChange={inputHandler}/><br/><br/>
    <Button variant='contained' onClick={loginHandler}>Log in</Button><br/><br/>
    </div>
  )
}

export default Login
