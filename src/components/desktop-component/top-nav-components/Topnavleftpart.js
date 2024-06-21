import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import Icontextwrapper from "./Icontextwrapper";

export default function Topnavleftpart() {
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
  );
}
