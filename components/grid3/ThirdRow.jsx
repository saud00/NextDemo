import React, {useState} from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from '../../styles/Home.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CachedIcon from '@mui/icons-material/Cached';

function ThirdRow() {
    const [date, setDate] = useState(new Date())
  return (
    <div className={styles.thirdRow}>
           <div style={{width:'50%' , display:'flex', flexDirection:'row', justifyContent:'space-around',padding:'30px, 30px'}} >
             <div>
                <CalendarTodayIcon/>
                </div>
                <div>

                25th, June, 2022
                </div>

                <div>
                    <MoreHorizIcon/>
                </div>
            </div>

            <div style={{width:'20%'}}>
                <CachedIcon/>
            </div>
    </div>
  )
}

export default ThirdRow