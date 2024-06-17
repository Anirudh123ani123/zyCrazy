import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ChairIcon from '@mui/icons-material/Chair';
import GroupsIcon from '@mui/icons-material/Groups';
import PowerIcon from '@mui/icons-material/Power';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import Crop75RoundedIcon from '@mui/icons-material/Crop75Rounded';
import AppleIcon from '@mui/icons-material/Apple';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import SetMealIcon from '@mui/icons-material/SetMeal';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import CorporateFareSharpIcon from '@mui/icons-material/CorporateFareSharp';
import SaveAsSharpIcon from '@mui/icons-material/SaveAsSharp';
 const MenuData= [
    {category:"categories"},
    { icon:<GroupsIcon/>,iconText:"Direct By Farm",submenu:
        [{icon:<AccountCircleIcon/>,iconText:"Vegetables"},{icon:<AppleIcon/>,iconText:"fruits"},
            {icon:<EnergySavingsLeafOutlinedIcon/>,iconText:"Anaaj/Grain"},{icon:<AccountCircleIcon/>,iconText:"Milk"},
            {icon:<EggOutlinedIcon/>,iconText:"Eggs"},{icon:<SetMealIcon/>,iconText:"Fish"},
            {icon:<ViewInArIcon/>,iconText:"coming soon"}
        ]},
    { icon:<Crop75RoundedIcon/>,iconText:"Self Made",submenu:
        [{icon:<AccountCircleIcon/>,iconText:"Artificial Jewellery"},
        {icon:<AccountCircleIcon/>,iconText:"Cloth/Stitching"},
        {icon:<AccountCircleIcon/>,iconText:"Gift Basket"},
        {icon:<AccountCircleIcon/>,iconText:"Handbags"},
        {icon:<AccountCircleIcon/>,iconText:"Home Decor"},
        {icon:<AccountCircleIcon/>,iconText:"Coming soon"},
        ]},
    { icon:<HandshakeRoundedIcon/>,iconText:"Rental Items",submenu:[
        {icon:<AccountCircleIcon/>,iconText:"AC"},
        {icon:<AccountCircleIcon/>,iconText:"Computer/Laptop"},
        {icon:<AccountCircleIcon/>,iconText:"Costume/Cloth"},
        {icon:<AccountCircleIcon/>,iconText:"Fridge"},
        {icon:<AccountCircleIcon/>,iconText:"Furniture"},
        {icon:<AccountCircleIcon/>,iconText:"Home Appliance"},
        {icon:<AccountCircleIcon/>,iconText:"Inverter"},
        {icon:<AccountCircleIcon/>,iconText:"Coming Soon"},
    ]},
    { icon:<AccountCircleIcon/>,iconText:"Real Estate",submenu:[
        {icon:<KeySharpIcon/>,iconText:"Rent"},
        {icon:<LocalAtmIcon/>,iconText:"Buy"},{icon:<DescriptionSharpIcon/>,iconText:"Commercials"},
        {icon:<HandshakeRoundedIcon/>,iconText:"Property Dealer"},{icon:<CorporateFareSharpIcon/>,iconText:"Builder"},
        {icon:<SaveAsSharpIcon/>,iconText:"Contractor"},{icon:<AccountCircleIcon/>,iconText:"Interior Designer"},
        {icon:<AccountCircleIcon/>,iconText:"Architecture"},{icon:<AccountCircleIcon/>,iconText:"Plumber"},
        {icon:<AccountCircleIcon/>,iconText:"Carpenter"},{icon:<AccountCircleIcon/>,iconText:"Electrician"},
        {icon:<AccountCircleIcon/>,iconText:"Painter"}
    ]},
    { icon:<DriveEtaIcon />,iconText:"Vechile",submenu:[]},
    { icon:<PhoneIphoneIcon/>,iconText:"Mobiles",submenu:[]},
    { icon:<ChairIcon/>,iconText:"Furniture",submenu:[]},
    { icon:<AccountCircleIcon/>,iconText:"Fashion",submenu:[]},
    { icon:<PowerIcon/>,iconText:"Electronics",submenu:[
        {icon:<AccountCircleIcon/>,iconText:"AC"},
        {icon:<AccountCircleIcon/>,iconText:"Cameras & Lenses"},
        {icon:<AccountCircleIcon/>,iconText:"Computer/Laptop"},
        {icon:<AccountCircleIcon/>,iconText:"Fridge"},
        {icon:<AccountCircleIcon/>,iconText:"Kitchen Appliances"},
        {icon:<AccountCircleIcon/>,iconText:"Printers"},
        {icon:<AccountCircleIcon/>,iconText:"TV"},
        {icon:<AccountCircleIcon/>,iconText:"Washing Machine"},
        {icon:<AccountCircleIcon/>,iconText:"Coming Soon"},
    ]},
    { icon:<GroupsIcon/>,iconText:"Coming soon",submenu:[]},
    { icon:<GroupsIcon/>,iconText:"Coming soon",submenu:[]},
    { icon:<GroupsIcon/>,iconText:"Coming soons"}
    
 ]

export default MenuData;
