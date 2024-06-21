import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import MyContext from '../../context/MyContext';
import MenuData from '../../menudata/MenuData';
import Leftsidemenu from './Leftsidemenu'
export default function Lowerparentcontainer() {
  return (
    <MyContext.Provider value={MenuData} secondvalue="anirudh">
    <Grid container style={{height:"89vh",backgroundColor: "#eeeeee",}}>
    <Grid xs={2} style={{ height:"100%"}}>
    
    <Leftsidemenu />
    </Grid>
    <Grid xs={10} style={{textAlign:'left',height:"100%"}}>
    
    </Grid>
  </Grid>
  </MyContext.Provider>
  )
}
