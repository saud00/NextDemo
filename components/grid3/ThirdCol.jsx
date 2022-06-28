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
        <div style={{width: '100%'}}>
            <ThirdRow/>
        </div>


          <Box sx={{borderRadius: 5}} style={{width: '100%', minHeight:90, overflow:'hidden',  backgroundColor:"#84CCC5", my:9, color:'white'}}>

              <CustomizedDividers  />

              <div style={{padding:15, backgroundColor:"#84CCC5", display:'flex', flexDirection:'row',borderRadius:'10px' ,justifyContent:'space-evenly'}}>
                <div>Dream</div>
                   <Divider orientation="vertical" flexItem sx={{bgcolor:'white', color:'white'}} />
                <div>Job</div>
                  <Divider orientation="vertical" flexItem sx={{bgcolor:'white', color:'white'}} />
                <div>Goals</div>
              </div>

          </Box>

        <div style={{width:'100%'}}>
            <ThirdForm/>
        </div>
    </Box>
  )
}

export default ThirdCol