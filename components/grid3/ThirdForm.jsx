// material-ui
import { Select, Button, Grid, Typography, TextField } from '@mui/material';
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
      borderColor: '#E29578',
    },
    '&:hover fieldset': {
      borderColor: '#E29578',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E29578',
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
           inputProps={{ style: { fontFamily: 'nunito', borderColor:  "#E29578"}}}
            />
        </Grid>

        <Grid item xs={12} sm={12}>

      <Tooltip title={longText}>
          <CssTextField focusColor='#E29578' multiline minRows={10} onChange={(e)=>handleChange(e)} placeholder='Your entry here'  required id="question" name="question"  fullWidth autoComplete="family-name" className={styles.notes}
           inputProps={{ style: { fontFamily: 'nunito', borderColor:  "#E29578", lineHeight: '30px', fontSize:"20px"}}}
          />
          </Tooltip>
        </Grid>
        
          {/* <Button size='small' variant='contained' style={{borderRadius: 50}} onClick={saveProject} > <AddIcon/> </Button> */}
        
        <Grid item  xs={12} sm={12}>
        <Avatar sx={{ width: 56, height: 56, position:'relative', bottom:'10px', left:'-100px' }} style={{backgroundColor:'#006D77',
          border: `1px solid #006D77`
          }}>
            <AddIcon sx={{ width: 26, height: 36 }} onClick={saveProject} />
            </Avatar>
        </Grid> 

      </Grid>
    </>
  );
}
