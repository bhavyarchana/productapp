import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Admin=()=>{
    const navigate = useNavigate();

    const admin = JSON.parse(localStorage.getItem('admin')) || {};

    const handleLogout =()=>{
        localStorage.removeItem('admin');
        navigate("/login");
    };

     return (
          <div>
          <h1>USER</h1>
          <h2>name:{admin.name}</h2>
          <h3>email:{admin.email}</h3>
          <Button variant="contained" onClick={handleLogout}>logout</Button>
        </div>
      )
};


export default Admin