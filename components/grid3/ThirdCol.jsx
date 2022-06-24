import React,{useState} from 'react'
import styles from '../../styles/Home.module.css'
import { Box } from '@mui/system';
import ThirdRow from './ThirdRow';
import ThirdForm from './ThirdForm';

function ThirdCol() {
  return (
    <Box className={styles.thirdCol}>
        <div style={{width: '100%', margin:'0px, 30px'}}>
            <ThirdRow/>
        </div>

        <div>
            <ThirdForm/>
        </div>
    </Box>
  )
}

export default ThirdCol