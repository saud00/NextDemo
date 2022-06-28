import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../../styles/Home.module.css'
import { Divider } from '@mui/material';


export default function Cards({val}) {
  return (
    <Card  sx={{ minWidth: 200, fontFamily:'Montserrat' , mt:5, backgroundColor: "#E29578",color:'white',
    borderRadius:6,"&:hover": {
      filter:`drop-shadow(0px 0px 5px #E29578)`,
        backgroundColor: "#E29578",
    }, }}>
      <CardContent style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <Box sx={{width:'35%',display:'flex', minHeight:'100%', alignItems:'center'}}>

        <Typography className={styles.secondCardInner} sx={{ fontWeight:'bold',fontFamily:'Montserrat' }} gutterBottom>
           10:00 PM
        </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{bgcolor:'white'}}/>
<Box sx={{width:'65%'}}>

        <Typography className={styles.secondCardInner} style={{fontWeight:'bold',textAlign:'justify',fontFamily:'Montserrat'}} component="div">
           <strong>{val.title}</strong>  <br/>
           </Typography>
        <Typography variant="caption" className={styles.secondCardInner} style={{fontWeight:'normal',textAlign:'justify',fontFamily:'Montserrat'}} component="div">
          {val.question}
        </Typography>
</Box>
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
