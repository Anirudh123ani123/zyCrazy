import { React, useContext, useEffect, useState } from "react";
import MyContext from "./context/MyContext";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
export default function Leftsidemenu() {
  let menuData = useContext(MyContext);
  let [goBackToPreviousMenu, setGoBackPrevMenu] = useState("false");
  let [, ...iconsObject] = menuData;
  let [menuToDisplay, setMenu] = useState([...iconsObject]);
  let [previousMenu, setPrevousMenu] = useState(null);
  let [backArrow, setbckArrow] = useState({
    show: false,
    textWithArrow: "Direct By Farm",
  });

  let cssobject = {
    h1_css: {
      borderBottom: "1px solid light grey",
      borderRadius: "4px",
      textAlign: "start",
      fontFamily: "Roboto, sans-serif",
      margin: "2px 5px",
      padding: "5px",
      fontWeight: "400",
      fontSize: "22px",
    },
    secondDiv_css: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      height: "91%",
      borderRightStyle: "solid",
      borderRightColor: "white",
      borderTopStyle: "solid",
      borderTopColor: "#D1D0CE",
      borderTopWidth: "1px",
    },
    button_css: {
      display: "flex",
      paddingLeft: "1vw",
      height: "7vh",
      paddingTop: "1.3vh",
      backgroundColor: "#eeeeee",
      outline: "none",
      border: "none",
      borderRadius: "1vh",
      marginRight: "1vw",
    },
    iconTextcss: {
      marginLeft: "0.5vw",
      marginTop: "0.6vh",
      fontSize: "1.2vw",
      fontWeight: "580",
    },
  };

  useEffect(() => {}, []);
  const menuButtnHandler = (evnt, iconText, submenu) => {
    if (submenu.length > 0) {
      setbckArrow({ show: true, textWithArrow: iconText });
      setMenu([...submenu])
    }
  };
  const backArrowEventhandler = (event) => {
    setMenu(iconsObject);
    setbckArrow({ show: false, textWithArrow: null });
  };
  return (
    <div style={{ height: "99%" }}>
      {backArrow.show ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={cssobject["h1_css"]}>{backArrow.textWithArrow}</h1>
          <KeyboardBackspaceIcon
            onClick={(event) => backArrowEventhandler(event)}
            fontSize="large"
            sx={{ marginLeft: "3vw", color: "rgb(13 110 253)" }}
          />
        </div>
      ) : (
        <h1 style={cssobject["h1_css"]}>Categories</h1>
      )}

      <div style={cssobject["secondDiv_css"]}>
        {menuToDisplay.map((obj) => {
          return (
            <button
              onClick={(evnt) => {
                if(obj.hasOwnProperty("submenu")){
                  console.log("have sub menu");
                  // console.log("obj[submenu]:", [...obj["submenu"]]);
                  // let arr = [...obj["submenu"]];
                  menuButtnHandler(evnt, obj.iconText, obj["submenu"]);
                }else{
                  console.log("don't have sub menu");
                }
               
              }}
              onMouseOver={(evnt) => {
                evnt.target.style.backgroundColor = "#DCDCDC";
              }}
              onMouseOut={(evnt) => {
                evnt.target.style.backgroundColor = "#eeeeee";
              }}
              style={cssobject["button_css"]}
            >
              {<span> {obj.icon}</span>}
              <span style={cssobject["iconTextcss"]}> {obj.iconText}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}