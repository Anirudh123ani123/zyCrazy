import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import SmsIcon from "@mui/icons-material/Sms";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icontextwrapper from "./Icontextwrapper";
export default function Topnavrightpart() {
  let icons = [
    {
      grid_xs: 3,
      icon: (
        <SmsIcon
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
      },
      icontext: "Response",
    },
    {
      grid_xs: 4,
      icon: (
        <SettingsIcon
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
      },
      icontext: "Setting",
    },
    {
      grid_xs: 3,
      icon: (
        <AccountCircleIcon
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
        fontSize: "1vw",
        fontWeight: "500",
      },
      icontext: "Mohd Israr",
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
