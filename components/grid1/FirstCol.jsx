import React from 'react'
import styles from '../../styles/Home.module.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import { Badge, Box, Paper } from '@mui/material';
import styled from '@emotion/styled';

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
            <div className={styles.firstHeadings} > <AssignmentIcon/> &nbsp; Journals</div>
            <div  className={styles.firstHeadings}> <EditIcon/>&nbsp; Drafts</div>
            <div className={styles.firstHeadings}> <StarIcon/>&nbsp;Favourate</div>
            <div className={styles.firstHeadings}> <SettingsIcon/> &nbsp;Settings</div>
        </div>
        {/* <div  className={styles.firstlast}>
          <ScreenShareIcon/>
        </div> */}
    </div>
  )
}

export default FirstCol