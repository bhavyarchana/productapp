import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const View = () =>{
  var[product,setproduct]=useState([])
  var navigate=useNavigate()
  axios.get("http://localhost:3000/view")    
  .then((res)=>{
    console.log(res.data)
    setproduct(res.data)
  })
  // delete function
  const deletproduct=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3000/delete/"+id)
    .then((res)=>{
      console.log(res.date.message)
      alert(res.data.message)
      })
    }
    const updateproduct=(val)=>{
      navigate("/add",{state:{val}})
    }

    const addToCart =(productId) =>{
      axios.post("http://localhost:3000/add-to-cart",{
        userId: user?.id,
        productId: productId
      }).then((res)=>{
        alert(res.data.message);
      })
    };

    
  return (
    <div align='center'>
      <Grid container spacing={2}>
        {product.map((val)=>{
          return(
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
       <CardActions>
         {
          user ?(
            user.userType == "admin"?(
              <>
                <Button size="small" variant='contained' color='error' onClick={()=>{deletproduct(val._id)}}> delete</Button>
                <Button size="small"variant='contained' color='success'onClick={()=>{updateproduct(val)}}>update</Button>
               </>
          
           ):(
              <Button size="small"variant='contained' color='success'>Add to cart</Button>
           )
         ): null
        }
          
       </CardActions>
      </Card>
       </Grid>
      );}
    
    )}
      </Grid>
    </div>
  )
}

export default View
