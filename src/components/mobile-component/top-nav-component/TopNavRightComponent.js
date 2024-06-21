import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import SmsIcon from "@mui/icons-material/Sms";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icontextwrapper from "../../desktop-component/top-nav-components/Icontextwrapper";
export default function TopNavRightComponent() {
  let container_grid_css={
    // border:"2px solid red",
    marginLeft:"2vw",marginTop:"1vh"};
  let child_div_css={ display: "flex", flexDirection: "column",width:"15vw" };
  const icons=[
    {
      grid_xs: 4,
      icon:<SmsIcon style={{
       height: "4.2vh",
       width: "100%",
       fill:"#041E42",
      //  border:"2px solid yellow"
    }}
    onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
          onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
    />,
      icontext:"Response",
      icontextcss:{ 
        fontSize: "2.8vw",
        fontWeight: "600",
        color: "#041E42",
        // border:"2px solid yellow",
        textAlign:"center"}
    },
    {
      grid_xs: 4,
      icon: <SettingsIcon
      style={{
        height: "4.2vh",
        width: "100%",
        fill:"#041E42",
        // border:"2px solid yellow"
      }}
      onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
      onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
    />,
      icontext:"Setting",
      icontextcss:{
        fontSize: "2.8vw",
        fontWeight: "600",
        color: "#041E42",
        // border:"2px solid yellow",
        textAlign:"center"}
    },
    {
      grid_xs: 4,
      icon:<AccountCircleIcon
      style={{
        height: "4.2vh",
        width: "100%",
        fill:"#041E42",
        // border:"2px solid yellow"
      }}
      onMouseOver={(event)=>{event.target.style.fill="#1520A6"}}
      onMouseOut={(event)=>{event.target.style.fill="#041E42"}}
    />,
      icontext:"Mohd Israr",
      icontextcss:{
        
        fontSize: "2.8vw",
        fontWeight: "600",
        color: "#041E42",
        // border:"2px solid yellow",
        textAlign:"center",
        lineHeight:"2.5vh"}
    }
  ]
  return (
    <Grid container sx={container_grid_css} justifyContent="center" spacing={1}>
    {icons.map((objt) => (
      <div  
        style={child_div_css}
        onMouseOver={(event)=>{event.target.style.cursor="pointer"}}
      >
        <Icontextwrapper
          icon={objt.icon}
          icontextcss={objt.icontextcss}
          icontext={objt.icontext}
        />
      </div>
    ))}
  </Grid>
  )
}
