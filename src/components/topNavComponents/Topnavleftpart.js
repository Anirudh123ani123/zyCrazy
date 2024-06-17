import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import Icontextwrapper from "./Icontextwrapper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

  return (
    <Grid container spacing={0} style={{ width: "23vw",marginTop:"1.8vh" }}>
      <Grid
        style={{ display: "flex" }}
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
