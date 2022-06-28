// material-ui
import { Select, Button, Grid, Typography, TextField, Box } from '@mui/material';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import styles from '../../styles/Home.module.css'
import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#E29578',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#E29578',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
     border: '2px solid #e29578',
     borderRadius:'12px',
    //  backgroundOrigin: 'content-box'
    },
    '&:hover fieldset': {
      border: '2px solid #e29578',
      borderRadius:'12px',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid  #e29578',
      borderRadius:'12px',
    },
  },
});


const LargeTextField = styled(TextField)({
  '& label.Mui-focused': {
    border: '0px solid white'
  },
  '& .MuiInput-underline:after': {
    border: '0px solid white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '0px solid white'
    },
    '&:hover fieldset': {
      border: '0px solid white'
    },
    '&.Mui-focused fieldset': {
      border: '0px solid white'
    },
  },
});

const longText = `
The text disappear option is active at the moment. To turn it off go to settings
`;



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
      
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12}>

          <CssTextField focusColor='#E29578' onChange={(e)=>handleChange(e)} required id="title" placeholder='Enter Title here' name="title" fullWidth autoComplete="given-name"
           inputProps={{ style: { fontFamily: 'Montserrat'}}}
            />
        </Grid>

        <Grid item xs={12} sm={12}>

      <Tooltip title={longText}>

        <Box className={styles.notes}>
          <LargeTextField focusColor='#E29578' multiline minRows={10} onChange={(e)=>handleChange(e)} placeholder='Your entry here'  required id="question" name="question"  fullWidth autoComplete="family-name"  sx={{  background: `url('/line.png') repeat-y` }}
           inputProps={{ style: { fontFamily: 'Montserrat', lineHeight: '30px', fontSize:"15px"}}}
           />
           </Box>
          </Tooltip>
        </Grid>
        
          <div style={{width:'100%', textAlign:'right', color:'#5B5B5B'}}>
            0 words
        </div>

        <Grid item  xs={12} sm={12}>
        <Avatar sx={{ width: 56, height: 56, position:'relative',filter:`drop-shadow(0px 0px 5px #006D77)`, bottom:'10px', left:'-140px' }} style={{backgroundColor:'#006D77',
          border: `1px solid #006D77`
          }}>
            <AddIcon sx={{ width: 46, height: 46}} onClick={saveProject} />
            </Avatar>
        </Grid> 

      </Grid>
    </>
  );
}
