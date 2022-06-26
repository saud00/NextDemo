// material-ui
import { Select, Button, Grid, Typography, TextField } from '@mui/material';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import styles from '../../styles/Home.module.css'
import { styled } from '@mui/material/styles';


const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: p.focusColor
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor
    }
  }
}));


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

  return (
    <>
      
      <Grid container spacing={3}>

        <Grid item xs={10} sm={10}>
          <CssTextField focusColor='#E29578' onChange={(e)=>handleChange(e)} required id="title" placeholder='Enter Title here' name="title" fullWidth autoComplete="given-name"
           inputProps={{ style: { fontFamily: 'nunito', borderColor:  "#E29578"}}}
            />
        </Grid>

        <Grid item xs={10} sm={10}>
          <CssTextField focusColor='#E29578' multiline minRows={9} onChange={(e)=>handleChange(e)} placeholder='Your entry here'  required id="question" name="question"  fullWidth autoComplete="family-name" className={styles.notes}
           inputProps={{ style: { fontFamily: 'nunito', borderColor:  "#E29578", lineHeight: '30px', fontSize:"20px"}}}
          />
        </Grid>
        
          {/* <Button size='small' variant='contained' style={{borderRadius: 50}} onClick={saveProject} > <AddIcon/> </Button> */}
        
        <Grid item  xs={10} sm={10}>
        <Avatar sx={{ width: 56, height: 56 }} style={{backgroundColor:'#006D77',
          border: `1px solid #006D77`
          }}>
            <AddIcon sx={{ width: 26, height: 36 }} onClick={saveProject} />
            </Avatar>
        </Grid> 

      </Grid>
    </>
  );
}
