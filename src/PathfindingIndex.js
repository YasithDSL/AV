import * as React from 'react';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';


import Dijkstras from './Dijkstras.js';
import AStar from './AStar.js';
import ButtonAppBar from './AppBar.js'


export default function PathfindingIndex() {
  
  const renderButtons = () => {
    var arr = [];

    for(var i = 0; i < 300; i++) {
      arr.push(i)
    }

    return arr.map((num) => {
      return <Grid item xs={1}>
        <Button cell id={num} sx={{color: "white"}} ><CropSquareIcon ></CropSquareIcon></Button>
      </Grid>
    })
  }

  var invBtns = ["Djikstras", "Edit", "A-Star", "TargetNode", "StartNode", "Save", "Reset", "ResetVisitedNodes"];

  function edit_button(id, color) {
    var cell = document.getElementById(id);
    var changed = false;
      
    if(cell.style.color === color){
      cell.style.color = "white";
      changed = true;
    } else if(color !== "black") {
      let cells = document.querySelectorAll('button');
      cells.forEach(cell => {
        if(!invBtns.includes(cell.getAttribute("id"))) {
          if(cell.style.color === color) {
            cell.style.color = "white";
          }
        }
      })
    }
    if(!changed) {
      cell.style.color = color;
    }
  }

  function Edit() {
    let cells = document.querySelectorAll('button');
    cells.forEach(cell => {
      if(!invBtns.includes(cell.getAttribute("id"))) {
        cell.onclick = function () { edit_button(cell.id, "black"); };
      }
    })
  }

  function StartNode() {
    let cells = document.querySelectorAll('button');
    cells.forEach(cell => {
      if(!invBtns.includes(cell.getAttribute("id"))) {
        cell.onclick = function () { edit_button(cell.id, "red"); };
      }
    })
  }

  function TargetNode() {
    let cells = document.querySelectorAll('button');
    cells.forEach(cell => {
      if(!invBtns.includes(cell.getAttribute("id"))) {
        cell.onclick = function () { edit_button(cell.id, "green"); };
      }
    })
  }

  function Save() { 
    let cells = document.querySelectorAll('button');
    cells.forEach(cell => {
      if(!invBtns.includes(cell.getAttribute("id"))) {
        cell.onclick = null;
      }
    })
  }
  
  function Reset() {
    let cells = document.querySelectorAll('button');
    cells.forEach(cell => {
      if(!invBtns.includes(cell.getAttribute("id"))) {
        cell.style.color = "white";
      }
    })
  }

  function ResetVisitedNodes() { 
    let cells = document.querySelectorAll('button');
    cells.forEach(cell => {
      if(!invBtns.includes(cell.getAttribute("id")) && (cell.style.color == "blue" || cell.style.color == "gold")) {
        cell.style.color = "white";
      }
    })
  }

  return (
    <>
      <header>
      <ButtonAppBar title = "Pathfinding Algorithms"/>
      </header>
      <Paper elevation={0} sx={{ mt: 2, mb: 2, bgcolor: "#20262d"}}>
        <Container sx={{ p: 1, bgcolor: "#121212", color: "#FFFFFF", borderRadius: 2 , border: 1}} align="center">
          <Button sx={{ p: 1, color: "white"}} id="Edit" onClick={Edit}>Edit Grid</Button>
          <Button sx={{ p: 1, color: "white"}} id="StartNode" onClick={StartNode}>Start Node</Button>
          <Button sx={{ p: 1, color: "white"}} id="TargetNode" onClick={TargetNode}>Target Node</Button>
          <Button sx={{ p: 1, color: "white"}} id="Save" onClick={Save}>Save</Button>
          <Button sx={{ p: 1, color: "white"}} id="Reset" onClick={Reset}>Reset Entire Grid</Button>
          <Button sx={{ p: 1, color: "white"}} id="ResetVisitedNodes" onClick={ResetVisitedNodes}>Reset Visisted Nodes</Button>
          <Button sx={{ p: 1, color: "white", ml: 5}} id="Djikstras" onClick={Dijkstras}>Dijkstra's</Button>
          <Button sx={{ p: 1, color: "white"}} id="A-Star" onClick={AStar}>A-Star</Button>
          <Divider style={{ background: 'white'}} />
          <Typography id="timer" sx = {{ p: 1 }} variant="h6">
            The last computation took 0ms to complete
          </Typography>
        </Container>
      </Paper>
      <Container sx={{ p: 2 }}>
        <Grid container spacing={0} columns={20}>
          {renderButtons()}
        </Grid>
      </Container>
    </>
  );
}