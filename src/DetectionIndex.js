import * as React from 'react';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import './index.css';
import { useState } from 'react';
import ButtonAppBar from './AppBar.js'
import './index.css';

import * as AI from './AI.js';
import $ from 'jquery';

export default function SortingIndex() {

  let fileInput = document.getElementById("file-input");
  let image = document.getElementById("image");

  function getImage() {
    fileInput = document.getElementById("file-input");
    image = document.getElementById("image");
    if (!fileInput.files[0]) throw new Error("Image not found");
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      image.setAttribute("src", event.target.result);
      document.body.classList.add("image-loaded");
      let im = $("#image").get(0);
      AI.getPred(im);
    };
  }


  return (
    <>
      <header>
      <ButtonAppBar title ="Machine Learning Detection Tool (STILL IN DEVELOPMENT)"/>
      </header>
      <Paper elevation={0} sx={{ mt: 2, mb: 2, bgcolor: "#20262d"}}>
        <Container sx={{ p: 1, bgcolor: "#121212", color: "#FFFFFF", borderRadius: 2 , border: 1}} align="center">
          <Typography id="timer" sx = {{ p: 1 }} variant="h5">
            Upload image of dataset to analyse
          </Typography>
          <label for="img">Select image: </label>
          <input type="file" accept="image/*" id="file-input" onChange={getImage}/>
          <input type="submit"/>
        </Container>
      </Paper>
      <Container id="container" sx={{ p: 2 }}>
      <img src="" id="image"/>
      <Typography id="prediction" sx = {{ p: 1, color: "white"}} variant="h5">
            Upload image of dataset to analyse
      </Typography>
      </Container>
    </>
  );
}

