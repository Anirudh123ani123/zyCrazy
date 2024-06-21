import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Topnavcentralpart from "./Topnavcentralpart";
import Topnavrightpart from "./Topnavrightpart";
import Topnavleftpart from "./Topnavleftpart";

export default function Topnav() {
  let grid_css = {
    container_grid: { marginTop: "-1vh", width: "100vw" },
    first_child_grid: { display: "flex" },
    second_child_grid: { textAlign: "left", marginTop: "0.1vh" },
    third_child_grid: {
      textAlign: "left",
      marginTop: "-1.7vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      marginTop: "-0.3vh",
    },
  };
  return (
    <Grid container spacing={3} style={grid_css.container_grid}>
      <Grid xs={4} style={grid_css.first_child_grid}>
        <Topnavleftpart />
      </Grid>
      <Grid xs={3} style={grid_css.second_child_grid}>
        <Topnavcentralpart />
      </Grid>
      <Grid xs={5} style={grid_css.third_child_grid}>
        <Topnavrightpart />
      </Grid>
    </Grid>
  );
}
