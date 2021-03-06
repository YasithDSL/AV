import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PathfindingIndex from './PathfindingIndex.js';
import SortingIndex from './SortingIndex.js';
import DetectionIndex from './DetectionIndex.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/pathfinding" element={<PathfindingIndex />} />
        <Route path="/arraysorting" element={<SortingIndex />} />
        <Route path="/detection" element={<DetectionIndex />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
