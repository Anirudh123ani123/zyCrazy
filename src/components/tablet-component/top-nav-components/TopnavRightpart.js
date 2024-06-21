import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SmsIcon from "@mui/icons-material/Sms";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icontextwrapper from "../../desktop-component/top-nav-components/Icontextwrapper";
export default function TopnavRightpart() {
  let container_grid_css={width: "28vw"}; 
  let child_grid_css={ display: "flex", flexDirection: "column",width:"9vw" };
  let icons = [
    {
      grid_xs: 3,
      icon: (
        <SmsIcon
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
      icontext: "Response",
    },
    {
      grid_xs: 4,
      icon: (
        <SettingsIcon
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
      icontext: "Setting",
    },
    {
      grid_xs: 3,
      icon: (
        <AccountCircleIcon
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
        textAlign:"center",
        lineHeight:"2.5vh"
      },
      icontext: "Mohd Israr",
    },
  ];

  return (
    <Grid container spacing={0} style={container_grid_css}>
      {icons.map((objt) => (
        <Grid
          xs={objt.grid_xs}
          style={child_grid_css}
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
