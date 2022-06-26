import React, {useState} from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from '../../styles/Home.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CachedIcon from '@mui/icons-material/Cached';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

function ThirdRow() {
    const [date, setDate] = useState(new Date())
  return (
    <div className={styles.thirdRow}>
           <div style={{width:'50%' , display:'flex', flexDirection:'row', justifyContent:'space-around',padding:'30px, 30px'}} >
             <div>
                <CalendarTodayIcon sx={{ color:'#006D77' }} />
                </div>
                <div>

                25th, June, 2022
                </div>

                <div>
                    <MoreHorizIcon/>
                </div>
            </div>

            <div style={{width:'30%' }}>
                <CachedIcon sx={{ color:'silver' }}/> &nbsp;&nbsp;&nbsp;
                <IntegrationInstructionsIcon sx={{ color:'#006D77' }}/>
            </div>
    </div>
  )
}

export default ThirdRow