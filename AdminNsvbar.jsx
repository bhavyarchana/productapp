import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNsvbar = () => {
  return (
    <div>
      <AppBar>
            <Toolbar>
                <Typography variant="h6" sx={{flexGro:1 }}>User</Typography>
                    <Link to="/view">
                        <Button variant="contained" color='success'>View</Button>
                     </Link>
                    <Link to="/signup">
                        <Button variant="contained" color='success'>Signup</Button>
                     </Link>
             </Toolbar>
      </AppBar>
    </div>
  )
}

export default AdminNsvbar
