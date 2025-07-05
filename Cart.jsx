import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [cartItem,setCartItem]= useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/view")    
  .then((res)=>{
        setCartItem(res.data?.product || []);
    })
    .catch((err)=> console.log(err));
},[]);
  return (
    <div align='center'>
             <Grid item xs={12} md={4} sm={6}>
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={val.Image}
         title="green iguana"
        />
       <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {val.Pname}
           </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {val.Disc}
          </Typography>
        </CardContent>
      </Card>
       </Grid>
    </div>
  )
}

export default Cart
