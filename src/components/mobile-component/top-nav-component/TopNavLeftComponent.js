import React from 'react'
import { Grid } from '@mui/material';
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import Icontextwrapper from "../../desktop-component/top-nav-components/Icontextwrapper";
export default function TopNavLeftComponent() {
  let iconstextcss = {
    directionsWalkcss: {
      height: "6vh",
      // margin: "auto",
      height: "4.3vh",
      width: "5vw",
      marginTop: "1vh",
      fill: "#041E42",
      // border:"2px solid green"
    },
    directiontextcss: {
      marginTop: "1.7vh",
      // margin: "auto",
      fontSize: "3vw",
      fontWeight: "500",
      color: "#041E42",
      // border:"2px solid yellow"
    },
  };
  let grid_css = {
    container_grid: { width: "23vw", marginTop: "1.8vh" },
    child_grid: { display: "flex" },
  };
  return (
    <Grid container spacing={0} sx={grid_css.container_grid}>
    <Grid
      sx={grid_css.child_grid}
      onMouseOver={(event) => {
        event.target.style.cursor = "pointer";
      }}
    >
      <Icontextwrapper
        icon={
          <DirectionsWalkIcon
            style={iconstextcss.directionsWalkcss}
            onMouseOver={(event) => {
              event.target.style.fill = "#1520A6";
            }}
            onMouseOut={(event) => {
              event.target.style.fill = "#041E42";
            }}
          />
        }
        icontextcss={iconstextcss.directiontextcss}
        icontext="zyCrazy"
      />
    </Grid>
  </Grid>
  )
}
