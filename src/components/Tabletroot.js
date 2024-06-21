
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Topnav from './tablet-component/top-nav-components/Topnav';
import Lowerparentcontainer from './tablet-component/apps-lower-components/LowerParentContainer';
export default function Tabletroot() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container >
      <Grid xs={12} style={{height:'12vh',border:'2px solid grey',borderWidth:"0.30vh"}}>
        <Topnav/>
      </Grid>
      <Grid xs={12} style={{backgroundColor:"#eeeeee",marginTop:"0vh"}}>
        <Lowerparentcontainer/>
      </Grid>
    </Grid>
  </Box>
    </>
  )
}
