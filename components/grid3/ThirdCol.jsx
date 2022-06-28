import React,{useState} from 'react'
import styles from '../../styles/Home.module.css'
import { Box } from '@mui/system';
import ThirdRow from './ThirdRow';
import ThirdForm from './ThirdForm';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CustomizedDividers from './ToogleButtons';
import { Divider } from '@mui/material';
import styled from '@emotion/styled';

function ThirdCol() {
  return (
    <Box className={styles.thirdCol}>
        <Box style={{width: '100%'}}>
            <ThirdRow/>
        </Box>


          <Box sx={{borderRadius: 5}} style={{width: '100%', minHeight:90, overflow:'hidden',  backgroundColor:"#84CCC5",color:'white'}}>

              <CustomizedDividers  />

              <div style={{padding:15, backgroundColor:"#84CCC5", display:'flex', flexDirection:'row',borderRadius:'10px' ,justifyContent:'space-evenly'}}>
                <div>Dream</div>
                   <Divider orientation="vertical" flexItem sx={{bgcolor:'white', color:'white'}} />
                <div>Job</div>
                  <Divider orientation="vertical" flexItem sx={{bgcolor:'white', color:'white'}} />
                <div>Goals</div>
              </div>

          </Box>

        <Box style={{width:'100%'}}>
            <ThirdForm/>
        </Box>
    </Box>
  )
}

export default ThirdCol