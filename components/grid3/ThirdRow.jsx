import React, {useState} from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from '../../styles/Home.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CachedIcon from '@mui/icons-material/Cached';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Tooltip } from '@mui/material';

const shortText=`
The online sync option is active at the moment. To turn it off go to settings`


function ThirdRow() {
    const [date, setDate] = useState(new Date())
  return (
    <div className={styles.thirdRow}>
           <div style={{width:'35%' , display:'flex', flexDirection:'row', justifyContent:'space-around'}} >
             <div>
                <CalendarTodayIcon sx={{ color:'#006D77' }} />
                </div>
                <div style={{display:'flex', flexDirection:'column', fontWeight: 700, justifyContent:'space-around', color:'#5B5B5B;'}} >
                  <div>25th, June, 2022</div>
                  <div style={{fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '13px',
                      lineHeight: '22px',
                      color: '#84CCC5'
                      }}>
                        Monday
                      </div>
                </div>

                <div>
                    <MoreHorizIcon sx={{color:'#006D77'}} />
                </div>
            </div>

            <div style={{width:'10%', display:'flex', flexDirection:'row', justifyContent:'space-around' }}>
                
                <Tooltip title={shortText}>
                  <CachedIcon sx={{ color:'silver' }}/>
                </Tooltip> &nbsp;&nbsp;&nbsp;
                <IntegrationInstructionsIcon sx={{ color:'#006D77' }}/>
            </div>
    </div>
  )
}

export default ThirdRow