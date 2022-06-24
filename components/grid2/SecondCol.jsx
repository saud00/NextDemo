import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/Home.module.css'
import Cards from './Cards'
import SearchBar from './SearchBar'


function SecondCol() {
  const {newQs, Qs} = useSelector(state => state.QuestionReducers)
console.log(newQs)
console.log(Qs)
  return (
    <div className={styles.secondCol}>
        <div className={styles.secondSearch}>
            <SearchBar/>
        </div>

        <span className={styles.secondHeading}>
            <Typography  className={styles.secondHead}  align='left'>All Journals</Typography>
            <Typography variant='caption'  className={styles.secondHead}  align='right' style={{textDecoration: 'underline'}}>See all</Typography>
        </span>

        <div>
        {newQs.length !== 0 && newQs ? newQs.map((val,ind)=>{
                    return (
                    <div  key={ind}>
                        { val &&  <div><Cards val={val}/></div> }
                    </div>
                    )}):
                    Qs.map((val,ind)=>{
                      return (
                      <div  key={ind}>
                          { val.id &&  <div> <Cards val={val}/></div> }
                      </div>
                      )})
           
           
              }
           
        </div>
    </div>
  )
}

export default SecondCol