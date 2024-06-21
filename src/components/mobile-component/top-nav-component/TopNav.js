import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import TopNavLeftComponent from './TopNavLeftComponent';
import TopNavRightComponent from './TopNavRightComponent';
export default function TopNav() {
    let iconstextcss = {
        directionsWalkcss: {
          height: "6vh",
          margin: "auto",
          height: "4.3vh",
          width: "3vw",
          marginTop: "1vh",
          fill: "#041E42",
        },
        directiontextcss: {
          marginTop: "-1.2vh",
          margin: "auto",
          fontSize: "1.2vw",
          fontWeight: "500",
          color: "#041E42",
        },
      };
  return (
    <Grid container spacing={0} >
    <Grid xs={5} >
      <TopNavLeftComponent/> 
    </Grid>
    <Grid xs={6} >
      <TopNavRightComponent/>
    </Grid>
  </Grid>
  )
}
