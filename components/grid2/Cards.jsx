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
    <Card className={styles.card} sx={{ minWidth: 200, mt:6, backgroundColor: "#E29578",border: '1px solid #eaeaea',color:'white', borderRadius:6,"&:hover": {
        backgroundColor: "#E29578",
    }, }}>
      <CardContent style={{display: 'flex', flexDirection:'row'}}>
        <Typography className={styles.secondCardInner} sx={{ fontSize: 14 }} gutterBottom>
         <strong>  10:00 PM</strong> 
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="caption" className={styles.secondCardInner} style={{textAlign:'justify'}} component="div">
           <strong>{val.title}</strong>  <br/>
          {val.question}
        </Typography>
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
