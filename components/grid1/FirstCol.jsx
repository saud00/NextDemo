import React from 'react'
import styles from '../../styles/Home.module.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import { Badge, Box, Paper, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import styled from '@emotion/styled';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    color: "red",
    backgroundColor: "#84CCC5"
  }
});

function FirstCol() {
  return (
    <div className={styles.firstCol}>
        <div className={styles.firstImg}>

          <StyledBadge badgeContent=""  overlap="circular" style={{ transform: 'translate(100px, -90px)'}} >
          </StyledBadge>

            <img src='/3.jpeg' height={100} width={100} style={{borderRadius: 14}} />

        </div>
        <div className={styles.firstRef} >
            <div className={styles.firstHeadings} > <BookIcon sx={{color:'#84CCC5'}} /> Journals</div>
            <div  className={styles.firstHeadings}> <EditIcon sx={{color:'#84CCC5'}} /> Drafts</div>
            <div className={styles.firstHeadings}> <StarIcon sx={{color:'#84CCC5'}} /> Favourate</div>
            <div className={styles.firstHeadings}> <SettingsIcon sx={{color:'#84CCC5'}}/> Settings</div>
        </div>
        <div  className={styles.firstlast}>
            <ExitToAppIcon sx={{color:'#84CCC5'}} />
        </div>
    </div>
  )
}

export default FirstCol