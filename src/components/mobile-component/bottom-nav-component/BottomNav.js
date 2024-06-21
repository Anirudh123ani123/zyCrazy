import React from 'react'
import { Grid } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import Icontextwrapper from "../../desktop-component/top-nav-components/Icontextwrapper";
export default function BottomNav() {
    let container_grid_css={width: "98vw"};
    let icons = [
        {
          grid_xs: 4,
          icon: (
            <HomeIcon
            sx={{ fontSize: "7vw",fill:"#041E42",
                margin:"auto" }}
              onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
              onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
            />
          ),
          icontextcss: {
            fontSize: "2.8vw",
            fontWeight: "500",
            color: "#041E42",
          },
          icontext: "Home",
        },
        {
          grid_xs: 4,
          icon: (
            <StoreIcon
            sx={{ fontSize: "7vw",fill:"#041E42",
                margin:"auto" }}
             
              onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
              onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
            />
          ),
          icontextcss: {
         fontSize: "2.8vw",
            fontWeight: "500",
            color: "#041E42",
          },
          icontext: "Market Place",
        },
        {
          grid_xs: 4,
          icon: (
            <FontDownloadIcon
            sx={{ fontSize: "7vw",fill:"#041E42",
                margin:"auto" }}
              onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
              onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
            />
          ),
          icontextcss: {
            fontSize: "2.8vw",
            fontWeight: "500",
            color: "#041E42",
          },
          icontext: "Post Ads",
        },
      ];
  return (
    <Grid container spacing={0} style={container_grid_css}>
      {icons.map((objt) => (
        <Grid
          xs={objt.grid_xs}
          style={{ display: "flex", flexDirection: "column"}}
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
  )
}
