// material-ui
import { Select, Button, Grid, Typography, TextField, TableCell, FormControl, MenuItem, FormHelperText } from '@mui/material';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
// ==============================|| FORM WIZARD - BASIC  ||============================== //

export default function ThirdForm(props) {


  const dispatch = useDispatch()

  const [credentials, setCredentials] = React.useState({
    id:8,
    title: '',
    question: ''
})


  const handleChange= (e)=>{
    setCredentials( prevValues => { return { ...prevValues,[e.target.name]: e.target.value}
    })
    console.log(credentials)
  }
  
  
  const saveProject=(e)=>{
    setCredentials(prevValues => { return { ...prevValues, id: prevValues.id + 1}})


    dispatch({
      type: "ADD_Q",
      credentials :  credentials ,
    })
  }

  const products = [
    {
      name: 'David'
    },
    {
      name: 'Saud ahmed'
    },
    {
      name: 'Product 3'
    },
    {
      name: 'Product 4'
    },
    { name: 'Shipping' }
  ];

  return (
    <>
      
      <Grid container spacing={3}>
        <Grid item xs={10} sm={10}>
          <TextField onChange={(e)=>handleChange(e)} required id="title" placeholder='Enter Title here' name="title" fullWidth autoComplete="given-name" />
        </Grid>
        <Grid item xs={10} sm={10}>
          <TextField multiline minRows={9} onChange={(e)=>handleChange(e)} placeholder='your entry here'  required id="question" name="question"  fullWidth autoComplete="family-name" />
        </Grid>
        
        
        <Grid item  xs={10} sm={10}>
          <Button size='large' variant='outlined' onClick={saveProject} > ADD </Button>
        </Grid>

      </Grid>
    </>
  );
}
