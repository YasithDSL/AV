import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function ButtonAppBar(props) {
  let navigate = useNavigate();
  var isHome = props.isHome == "true" ? true : false;

  return (
    <Box>
      <AppBar position="sticky" style={{background: '#071a2f'}}>
        <Toolbar align="center">
          <Button disabled={isHome} id="return" sx={{color: "white"}} onClick={() => { navigate("/") }} ><ArrowBackIcon ></ArrowBackIcon></Button>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} fontWeight="bold">
            {props.title}
          </Typography>
          <Button disabled="true" id="return" sx={{color: "white"}} ></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
