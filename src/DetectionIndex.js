import * as React from 'react';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './index.css';
import { useState } from 'react';
import ButtonAppBar from './AppBar.js'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';


import * as AI from './AI.js';
import $ from 'jquery';

export default function DetectionIndex() {

  let fileInput = document.getElementById("file-input");
  let image = document.getElementById("image");
  

  const [results, setResults] = useState([25, 25, 25, 25]);

  async function getImage() {
    fileInput = document.getElementById("file-input");
    image = document.getElementById("image");
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function (event) {
      image.setAttribute("src", event.target.result);
      document.body.classList.add("image-loaded");
      let im = $("#image").get(0);
      let res = await AI.getPred(im)
      setResults(res);
    };
  }

  let data = [
    { argument:'Bubble', value: results[0]*100 },
    { argument:'Insertion', value: results[1]*100 },
    { argument:'Merge', value: results[2]*100 },
    { argument:'Heap', value: results[3]*100 },
  ];

  
  const Input = styled('input')({
    display: 'none',
  });

  return (
    <>
      <header>
      <ButtonAppBar title ="Machine Learning Detection Tool"/>
      </header>
      <Paper elevation={0} sx={{ mt: 2, mb: 2, bgcolor: "#20262d"}}>
        <Container sx={{ p: 1, bgcolor: "#121212", color: "#FFFFFF", borderRadius: 2 , border: 1}} align="center">
          <Typography id="timer" sx = {{ p: 1 }} variant="h5">
            Upload image of array to analyse
          </Typography>
          <label htmlFor="file-input">
            <Input accept="image/*" id="file-input" onChange={getImage} multiple type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Container>
      </Paper>
      <Container id="container" sx={{ p: 2, bgcolor: "#121212", color: "#FFFFFF", borderRadius: 2 , border: 1 }} align="center">
      <img src="" id="image"/>
      <Paper elevation={0} sx={{ mt: 2, mb: 2, bgcolor: "#20262d", border: 1, color: "#FFFFFF", borderRadius:2}}>
      <Chart data={data}>
      <PieSeries valueField="value" argumentField="argument" />
      <Title text="Probability of each algorithm"/>
      </Chart>
      <div id='label-container'></div>
      <Typography id="Description" sx = {{ p: 1, color: "white"}} variant="h6">
        The following prediction is based on not only the speed at which the algorithm will complete the sort, but also the difficulty
        of implementing the algorithm (simplicity) and the number of swaps required. The prediction is only a guidance, but not always correct.
        Furthermore, Heap sort and Merge sort are much more efficient compared to insertion and bubble sort, especially with larger datasets.
      </Typography>
      </Paper>
      </Container>
    </>
  );
}

