import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import TopnavRightpart from "./TopnavRightpart";
import TopnavLeftpart from "./TopnavLeftpart";
import TopnavCentralpart from './TopnavCentralpart';
export default function Topnav() {
  let grid_css = {
    container_grid: { marginTop: "0vh", width: "97.6vw",height:"100%" },
    first_child_grid: { display: "flex" },
    second_child_grid: {  marginTop: "1vh" },
    third_child_grid: {
      // textAlign: "left",
      marginTop: "1vh",
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "flex-end",
      // marginTop: "-0.3vh",
    },
  };
  return (
    <Grid container spacing={0} style={grid_css.container_grid}>
      <Grid xs={4} style={grid_css.first_child_grid}>
         <TopnavLeftpart/>
      </Grid>
      <Grid xs={4} style={grid_css.second_child_grid}>
        <TopnavCentralpart/>
      </Grid>
      <Grid xs={4} style={grid_css.third_child_grid}>
        <TopnavRightpart/>
      </Grid>
    </Grid>
  );
}
