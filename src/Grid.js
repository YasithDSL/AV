import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CropSquareIcon from '@mui/icons-material/CropSquare';

export default function AppGrid(props) {

  const renderButtons = () => {
    var arr = [];

    for(var i = 0; i < props.total; i++) {
      arr.push(i)
    }

    return arr.map((num) => {
      return <Grid item xs={1}>
        <Button cell id={num} sx={{color: "white"}} onClick={props.func}><CropSquareIcon ></CropSquareIcon></Button>
      </Grid>
    })
  }

  return (
    <Container sx={{ p: 2 }}>
      <Grid container spacing={0} columns={props.columns}>
        {renderButtons()}
      </Grid>
    </Container>
  );
}