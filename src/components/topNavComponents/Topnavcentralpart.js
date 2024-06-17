import {React,useState}  from "react";
import Grid from "@mui/material/Unstable_Grid2";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import Icontextwrapper from "./Icontextwrapper";

export default function Topnavcentralpart() {
  let[iconcolor,seticonclor]=useState("#041E42")
  let icons = [
    {
      grid_xs: 3,
      icon: (
        <HomeIcon
          style={{
            height: "6vh",
            margin: "auto",
            height: "4.3vh",
            width: "3vw",
            marginTop: "1vh",
            fill:"#041E42",
          }}
          onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
          onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
        />
      ),
      icontextcss: {
        marginTop: "-1.2vh",
        margin: "auto",
        fontSize: "1.2vw",
        fontWeight: "500",
        color: "#041E42",
      },
      icontext: "Home",
    },
    {
      grid_xs: 4,
      icon: (
        <StoreIcon
          style={{
            height: "6vh",
            margin: "auto",
            height: "4.3vh",
            width: "3vw",
            marginTop: "1vh",
            fill: "#041E42",
          }}
          onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
          onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
        />
      ),
      icontextcss: {
        marginTop: "-1.2vh",
        margin: "auto",
        fontSize: "1.2vw",
        fontWeight: "500",
        color: "#041E42",
      },
      icontext: "Market Place",
    },
    {
      grid_xs: 3,
      icon: (
        <FontDownloadIcon
          style={{
            height: "6vh",
            margin: "auto",
            height: "4.3vh",
            width: "3vw",
            marginTop: "1vh",
            fill: "#041E42",
          }}
          onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
          onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
        />
      ),
      icontextcss: {
        marginTop: "-1.2vh",
        margin: "auto",
        fontSize: "1.2vw",
        fontWeight: "500",
        color: "#041E42",
      },
      icontext: "Post Ads",
    },
  ];

  return (
    <Grid container spacing={0} style={{ width: "23vw" }}>
      {icons.map((objt) => (
        <Grid
          xs={objt.grid_xs}
          style={{ display: "flex", flexDirection: "column" }}
          onMouseOver={(event)=>{event.target.style.cursor="pointer"}}
        >
          <Icontextwrapper
            icon={objt.icon}
            icontextcss={objt.icontextcss}
            icontext={objt.icontext}
          />
        </Grid>
      ))}
    </Grid>
  );
}
