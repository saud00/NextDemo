import React from 'react'
import styles from '../../styles/Home.module.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';

function FirstCol() {
  return (
    <div className={styles.firstCol}>
        <div className={styles.firstImg}>
            <img src='/3.jpeg' height={100} width={100} style={{borderRadius: 50}} />
        </div>
        <div className={styles.firstRef} >
            <div style={{display: 'flex', color:'grey'}} > <AssignmentIcon/> &nbsp; Journals</div>
            <div  style={{display: 'flex', color:'grey'}}> <EditIcon/>&nbsp; Drafts</div>
            <div style={{display: 'flex', color:'grey'}}> <StarIcon/>&nbsp;Favourate</div>
            <div style={{display: 'flex', color:'grey'}}> <SettingsIcon/> &nbsp;Settings</div>
        </div>
    </div>
  )
}

export default FirstCol