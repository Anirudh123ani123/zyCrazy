import {React}  from "react";
import Grid from "@mui/material/Unstable_Grid2";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import Icontextwrapper from "../../desktop-component/top-nav-components/Icontextwrapper";

export default function TopnavCentralpart() {
  let container_grid_css={width: "25vw"};
  let icons = [
    {
      grid_xs: 3,
      icon: (
        <HomeIcon
          style={{
            // margin: "auto",
            height: "4.2vh",
            width: "100%",
            // marginTop: "1vh",
            fill:"#041E42",
            // border:"2px solid yellow"
          }}
          onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
          onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
        />
      ),
      icontextcss: {
        // marginTop: "-1.2vh",
        // margin: "auto",
        fontSize: "2vw",
        fontWeight: "600",
        color: "#041E42",
        // border:"2px solid yellow",
        textAlign:"center"
      },
      icontext: "Home",
    },
    {
      grid_xs: 4,
      icon: (
        <StoreIcon
          style={{
            height: "4.2vh",
            width: "100%",
            fill: "#041E42",
            // border:"2px solid yellow"
          }}
          onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
          onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
        />
      ),
      icontextcss: {
        // marginTop: "-1.2vh",
        fontSize: "2vw",
        fontWeight: "500",
        color: "#041E42",
        // border:"2px solid yellow",
        textAlign:"center",
        lineHeight:"2.5vh"
        // width:"6vw"
      },
      icontext: "Market Place",
    },
    {
      grid_xs: 3,
      icon: (
        <FontDownloadIcon
          style={{
            // height: "6vh",
            // margin: "auto",
            height: "4.2vh",
            width: "100%",
            // marginTop: "1vh",
            fill: "#041E42",
            // border:"2px solid yellow"
          }}
          onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
          onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
        />
      ),
      icontextcss: {
        fontSize: "2vw",
        fontWeight: "500",
        color: "#041E42",
        // border:"2px solid yellow",
        textAlign:"center",
        lineHeight:"2.5vh"
      },
      icontext: "Post Ads",
      
    },
  ];

  return (
    <Grid container style={container_grid_css}>
      {icons.map((objt) => (
        <Grid
          xs={objt.grid_xs}
          style={{ display: "flex", flexDirection: "column",width:"8vw",}}
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
