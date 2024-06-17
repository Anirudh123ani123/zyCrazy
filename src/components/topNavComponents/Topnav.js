import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Topnavcentralpart from './Topnavcentralpart';
import Topnavrightpart from './Topnavrightpart';
import Topnavleftpart from './Topnavleftpart';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Topnav() {
  return (
    
      <Grid container spacing={3} style={{marginTop:"-1vh",width:"100vw"}}>
        <Grid xs={4} style={{display:"flex"}}>
          <Topnavleftpart/>
        </Grid>
        <Grid xs={3} style={{textAlign:'left',marginTop:"0.1vh"}}>
        <Topnavcentralpart/>
        </Grid>
        <Grid xs={5}  style={{textAlign:'left',marginTop:"-1.7vh",display:"flex",
          flexDirection:"column",alignItems:"flex-end",marginTop:"-0.3vh"
        }}>
        <Topnavrightpart/>
        </Grid>
      </Grid>
    
  );
}
