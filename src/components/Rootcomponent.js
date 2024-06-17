import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Topnav from './topNavComponents/Topnav';
import Lowerparentcontainer from './appsLowerComponents/Lowerparentcontainer'
export default function Rootcomponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid xs={12} style={{height:'10vh',border:'2px solid grey',borderWidth:"0.30vh"}}>
          <Topnav/>
        </Grid>
        <Grid xs={12} style={{backgroundColor:"#eeeeee",marginTop:"0vh"}}>
          <Lowerparentcontainer/>
        </Grid>
      </Grid>
    </Box>
  );
}
