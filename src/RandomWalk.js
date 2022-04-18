import Cell from './Cell.js';

export default async function RandomWalk() {
    var start_time = performance.now();
    var buttons = document.querySelectorAll("button");
    var invBtns = ["Return", "Djikstras", "Edit", "A-Star", "TargetNode", "StartNode", "Save", "Reset", "ResetVisitedNodes"];
    var nodes = {};
    var destination_node;
    var start_node;
    
}