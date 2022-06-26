import React,{useState} from 'react'
import styles from '../../styles/Home.module.css'
import { Box } from '@mui/system';
import ThirdRow from './ThirdRow';
import ThirdForm from './ThirdForm';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CustomizedDividers from './ToogleButtons';

function ThirdCol() {
  return (
    <Box className={styles.thirdCol}>
        <div style={{width: '100%', margin:'0px, 30px'}}>
            <ThirdRow/>
        </div>


        <div  >
                <CustomizedDividers  />
            </div>

        <div>
            <ThirdForm/>
        </div>
    </Box>
  )
}

export default ThirdCol