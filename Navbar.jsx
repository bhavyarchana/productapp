import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                productapp
            </Typography>
            <Link to='/add'>
            <Button variant ="contained" color='success'>ADD</Button> 
            </Link>&nbsp;

            <Link to='/view'>
            <Button variant ="contained" color='success'>VIEW </Button> 
            </Link>&nbsp;

            <Link to='/login'>
            <Button variant ="contained" color='success'>LOGIN</Button> 
            </Link>&nbsp;

            <Link to='/signup'>
            <Button variant ="contained" color='success'>SIGNUP</Button> 
            </Link>&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
