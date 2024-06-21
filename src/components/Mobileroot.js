
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TopNav from "./mobile-component/top-nav-component/TopNav"
// import Topnav from './desktop-component/top-nav-components/Topnav';
// import Lowerparentcontainer from './desktop-component/apps-lower-components/Lowerparentcontainer'
export default function Mobileroot() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container >
      <Grid xs={12} style={{height:'10vh',border:'2px solid grey',borderWidth:"0.30vh"}}>
      <TopNav/>
      </Grid>
      <Grid xs={12} style={{backgroundColor:"#eeeeee",marginTop:"0vh"}}>
        middle
      </Grid>
      <Grid xs={12} style={{height:'10vh',border:'2px solid grey',borderWidth:"0.30vh"}}>
        bottom
      </Grid>
    </Grid>
  </Box>
    </>
  )
}