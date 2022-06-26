import React,{useState} from 'react'
import styles from '../../styles/Home.module.css'
import { Box } from '@mui/system';
import ThirdRow from './ThirdRow';
import ThirdForm from './ThirdForm';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CustomizedDividers from './ToogleButtons';
import { Divider } from '@mui/material';

function ThirdCol() {
  return (
    <Box className={styles.thirdCol}>
        <div style={{width: '100%', margin:'0px, 30px'}}>
            <ThirdRow/>
        </div>


          <div style={{width: '90%',  backgroundColor:"#84CCC5",  color:'white', margin:'15px 0px' }}>
              <CustomizedDividers  />

              <div style={{minHeight:40, backgroundColor:"#84CCC5", display:'flex', flexDirection:'row',borderRadius:'10px' ,justifyContent:'space-evenly', marginTop:'14px' }} >
                <div>Blue</div>
                   <Divider orientation="vertical" flexItem />
                <div>Back</div>
                  <Divider orientation="vertical" flexItem />
                <div>Base</div>
              </div>
          </div>

        <div>
            <ThirdForm/>
        </div>
    </Box>
  )
}

export default ThirdCol