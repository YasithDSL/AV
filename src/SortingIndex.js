import * as React from 'react';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import './index.css';
import { useState } from 'react';

import Bubble from './Bubble.js';
import MergeSort from './MergeSort.js';
import Insertion from './Insertion.js';
import HeapSort from './HeapSort.js';
import ButtonAppBar from './AppBar.js'
import Bar from './Bar.js';

export default function SortingIndex() {
  const renderButtons = (val) => {
    var arr = [];

    for(var i = 0; i < val; i++) {
      arr.push(i)
    }

    return arr.map((num) => {
      var height = RandomInteger(1, 500);
      var style = {
          minHeight: height,
          background: "white",
      };
      return <Grid item xs={1}>
        <div id="wrapper">
            <div bar id={num} value={height} class="verticle-line" style={style}></div>
        </div>
      </Grid>
    })
  }

  const [columns, setColumns] = useState(200);
  const [bars, setBars] = useState(renderButtons(columns));

  function RandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function Randomise() {
    for(var i = 0; i < columns; i++) {
        let bar = document.getElementById(i);
        bar.style.minHeight = "" + RandomInteger(1, 500) + "px";
    }
  }

  function Increase() {
      let size = columns;
      if(size < 50) {
        size = columns + 10;
      } else {
        size = columns + 50;
      }
      var elements = renderButtons(size);
      setColumns(size);
      setBars(elements);
    }

  function Decrease() {
    let size = columns;
    if(size == 10) {
      alert("Array size is at a minimum currently");
    } else {
      if(size <= 50 && size > 10) {
        size = columns - 10;
      }
      else{
        size = columns - 50; 
      }
      var elements = renderButtons(size);
      setColumns(size);
      setBars(elements);
    }
  }
  
  async function Reset() {
      for(var i = 0; i < columns; i++) {
        var bar = new Bar(i);
        bar.object.style.background = "white";
        let sleep = new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 1)
        });
        await sleep;
    }
    var elements = renderButtons(columns);
    document.getElementById("complexity").innerHTML = "";
    setColumns(columns);
    setBars(elements);
  }

  return (
    <>
      <header>
      <ButtonAppBar title = "Sorting Algorithms"/>
      </header>
      <Paper elevation={0} sx={{ mt: 2, mb: 2, bgcolor: "#20262d"}}>
        <Container sx={{ p: 1, bgcolor: "#121212", color: "#FFFFFF", borderRadius: 2 , border: 1}} align="center">
          <Button sx={{ p: 1, color: "white"}} id="Randomise" onClick={Randomise}>Randomise</Button>
          <Button sx={{ p: 1, color: "white"}} id="Increase" onClick={Increase}>Increase Size</Button>
          <Button sx={{ p: 1, color: "white"}} id="Decrease" onClick={Decrease}>Decrease Size</Button>
          <Button sx={{ p: 1, color: "white"}} id="Reset" onClick={Reset}>Reset</Button>
          <Button sx={{ p: 1, color: "white", ml: 5}} id="Bubble" onClick={() => Bubble(columns)}>Bubble</Button>
          <Button sx={{ p: 1, color: "white"}} id="MergeSort" onClick={() => MergeSort(columns)}>Merge</Button>
          <Button sx={{ p: 1, color: "white"}} id="Insertion" onClick={() => Insertion(columns)}>Insertion</Button>
          <Button sx={{ p: 1, color: "white"}} id="HeapSort" onClick={() => HeapSort(columns)}>Heap Sort</Button>
          <Divider style={{ background: 'white'}} />
          <Typography id="timer" sx = {{ p: 1 }} variant="h6">
            The last computation took 0ms to complete
          </Typography>
          <Typography id="complexity" sx = {{ p: 1 }} variant="h6">
          </Typography>
        </Container>
      </Paper>
      <Container id="container" sx={{ p: 2 }}>
        <Grid id="grid" container spacing={0} columns={columns} style={{transform:'rotateX(180deg)'}}>
          {bars}
        </Grid>
      </Container>
    </>
  );
}

