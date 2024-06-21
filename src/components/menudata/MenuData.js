//This file contain the left side menu data or left side navigation bar  

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
import ArchitectureSharpIcon from '@mui/icons-material/ArchitectureSharp';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import EventSeatTwoToneIcon from '@mui/icons-material/EventSeatTwoTone';
import PowerTwoToneIcon from '@mui/icons-material/PowerTwoTone';
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DeckIcon from '@mui/icons-material/Deck';
 const MenuData= [
    {category:"categories"},
    { icon:<GroupsIcon/>,iconText:"Direct By Farm",submenu:
        [{icon:<AccountCircleIcon/>,iconText:"Vegetables"},{icon:<AppleIcon/>,iconText:"fruits"},
            {icon:<EnergySavingsLeafOutlinedIcon/>,iconText:"Anaaj/Grain"},{icon:<AccountCircleIcon/>,iconText:"Milk"},
            {icon:<EggOutlinedIcon/>,iconText:"Eggs"},{icon:<SetMealIcon/>,iconText:"Fish"},
            {icon:<ViewInArIcon/>,iconText:"coming soon"}
        ]},
    { icon:<Crop75RoundedIcon/>,iconText:"Self Made",submenu:
        [{icon:<DiamondOutlinedIcon/>,iconText:"Artificial Jewellery"},
        {icon:<AccountCircleIcon/>,iconText:"Cloth/Stitching"},
        {icon:<CardGiftcardOutlinedIcon/>,iconText:"Gift Basket"},
        {icon:<LocalMallOutlinedIcon/>,iconText:"Handbags"},
        {icon:<DeckIcon/>,iconText:"Home Decor"},
        {icon:<PaletteTwoToneIcon/>,iconText:"Coming soon"},
        ]},
    { icon:<HandshakeRoundedIcon/>,iconText:"Rental Items",submenu:[
        {icon:<ThermostatAutoIcon/>,iconText:"AC"},
        {icon:<ComputerOutlinedIcon/>,iconText:"Computer/Laptop"},
        {icon:<AccountCircleIcon/>,iconText:"Costume/Cloth"},
        {icon:<HandshakeRoundedIcon/>,iconText:"Fridge"},
        {icon:<BedOutlinedIcon/>,iconText:"Furniture"},
        {icon:<NoteAltOutlinedIcon/>,iconText:"Home Appliance"},
        {icon:<PaletteTwoToneIcon/>,iconText:"Inverter"},
        {icon:<PaletteTwoToneIcon/>,iconText:"Coming Soon"},
    ]},
    { icon:<WaterDamageIcon/>,iconText:"Real Estate",submenu:[
        {icon:<KeySharpIcon/>,iconText:"Rent"},
        {icon:<LocalAtmIcon/>,iconText:"Buy"},{icon:<DescriptionSharpIcon/>,iconText:"Commercials"},
        {icon:<HandshakeRoundedIcon/>,iconText:"Property Dealer"},{icon:<CorporateFareSharpIcon/>,iconText:"Builder"},
        {icon:<SaveAsSharpIcon/>,iconText:"Contractor"},{icon:<ArchitectureSharpIcon/>,iconText:"Interior Designer"},
        {icon:<DesignServicesTwoToneIcon/>,iconText:"Architecture"},{icon:<BuildSharpIcon/>,iconText:"Plumber"},
        {icon:<EventSeatTwoToneIcon/>,iconText:"Carpenter"},{icon:<PowerTwoToneIcon/>,iconText:"Electrician"},
        {icon:<PaletteTwoToneIcon/>,iconText:"Painter"}
    ]},
    { icon:<DriveEtaIcon />,iconText:"Vechile",submenu:[]},
    { icon:<PhoneIphoneIcon/>,iconText:"Mobiles",submenu:[]},
    { icon:<ChairIcon/>,iconText:"Furniture",submenu:[]},
    { icon:<AccountCircleIcon/>,iconText:"Fashion",submenu:[]},
    { icon:<PowerIcon/>,iconText:"Electronics",submenu:[
        {icon:<ThermostatAutoIcon/>,iconText:"AC"},
        {icon:<CameraAltOutlinedIcon/>,iconText:"Cameras & Lenses"},
        {icon:<ComputerOutlinedIcon/>,iconText:"Computer/Laptop"},
        {icon:<HandshakeRoundedIcon/>,iconText:"Fridge"},
        {icon:<MicrowaveOutlinedIcon/>,iconText:"Kitchen Appliances"},
        {icon:<SaveAsSharpIcon/>,iconText:"Printers"},
        {icon:<PaletteTwoToneIcon/>,iconText:"TV"},
        {icon:<PaletteTwoToneIcon/>,iconText:"Washing Machine"},
        {icon:<PaletteTwoToneIcon/>,iconText:"Coming Soon"},
    ]},
    { icon:<GroupsIcon/>,iconText:"Coming soon",submenu:[]},
    { icon:<GroupsIcon/>,iconText:"Coming soon",submenu:[]},
    { icon:<GroupsIcon/>,iconText:"Coming soons"}
    
 ]

export default MenuData;
