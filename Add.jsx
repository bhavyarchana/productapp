import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var[input,setinput]=useState({Pname:"",Price:"",Disc:"",Image:""})
  var navigate=useNavigate()
  var location = useLocation()
  console.log("loc",location.state)

  const inputHandeler =(e) =>{
        console.log(e.target.value)
        setinput({...input,[e.target.name]:e.target.value})
        console.log(input)
  }

  useEffect(()=>{
    if(location.state !== null){
      setinput({
        ...input,
        Pname:location.state.val.Pname,
        Price:location.state.val.Price,
        Disc:location.state.val.Disc,
        Image:location.state.val.Image,
      })
    }
  },[])
  const submit=()=>{
    if( location.state !== null){
    axios.put("http://localhost:3000/update/"+location.state.val._id,input)
    .then((res)=>{
      console.log(res.data) 
      alert(res.data)
      navigate("/")
      })
    }
    else{
      axios.post("http://localhost:3000/add",input)
    .then((res)=>{
      console.log(res.data) 
      alert(res.data)
      navigate("/view")
      })
      .catch((err) => {
      console.error(err)
      alert("Failed to add product")
    })
    }} 
  
  return (
    <div align='center'><br/><br/><br/>
      <Typography variant='h4'>Add product</Typography>
      <TextField variant='outlined' label='product name' name="Pname" value={input.Pname} onChange={inputHandeler}/><br/><br/>
      <TextField variant='outlined' label='price'name="Price" value={input.Price} onChange={inputHandeler}/><br/><br/>
      <TextField variant='outlined' label='description'name="Disc" value={input.Disc} onChange={inputHandeler}/><br/><br/>
      <TextField variant='outlined' label='image'name="Image" value={input.Image} onChange={inputHandeler}/><br/><br/>
      <Button variant='contained' onClick={submit}>Add</Button><br/><br/>
    </div>
  )
}

export default Add
