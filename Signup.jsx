import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  var [form, setForm] = useState({Name: '',Email: '',Password: '',Phone: ''})
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    axios.post('http://localhost:3000/signup', form)
      .then(res => {
        alert(res.data)  // "Signed up successful!!"
         navigate("/view")
      })
      .catch(err => {
        console.error(err)
        alert('Signup failed')
      })
  }
  return (
    <div>
      <Typography variant='h4'>Sign UP</Typography>
          <TextField   label="Name" name="Name" variant="outlined"  value={form.Name} onChange={handleChange}/><br/><br/>
          <TextField  label="E-mail" name="Email"  variant="outlined"  value={form.Email} onChange={handleChange}/><br/><br/>
          <TextField  label="Password" name="Password" variant="outlined"  value={form.Password} onChange={handleChange}/><br/><br/>
          <TextField  label="phone" name="Phone" variant="outlined"  value={form.Phone} onChange={handleChange}/><br/><br/>
          <Button variant='contained' onClick={handleSubmit}>Sign up</Button><br/><br/>
    </div>
  )
}

export default Signup
