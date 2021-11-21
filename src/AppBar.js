import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar(props) {
  return (
    <Box>
      <AppBar position="sticky" style={{background: '#071a2f'}}>
        <Toolbar>
          <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1 }} fontWeight="bold">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
