import Cell from './Cell.js';

export default async function Dijkstras() {
    var start_time = performance.now();
    var buttons = document.querySelectorAll("button");
    var invBtns = ["Djikstras", "Edit", "A-Star", "TargetNode", "StartNode", "Save", "Reset", "ResetVisitedNodes", "Increase", "Decrease"];
    var nodes = {};
    var destination_node;
    var start_node;
    buttons.forEach(button => {
        if(!invBtns.includes(button.getAttribute("id"))) {
            var cell = new Cell(button.id);
            switch(button.style.color) {
                case "black":
                    cell.visited = true;
                    break;
                case "green":
                    destination_node = cell;
                    break;
                case "red":
                    cell.distance = 0;
                    start_node = cell;
                    break;
            }
            nodes[button.id] = cell;
        }
    })
    // closest cells = +-1 on id and +- 20 on id
    var unvisited_nodes = [];
    var current_node = start_node;
    var count = 1;
    var no_route = false;
    var prev_count = 0;
    var prev_current_node = null;
    var lock_count = 0;
    while (!destination_node.visited && !no_route) {
        let distance = Number.MAX_VALUE;

        for (const [key, value] of Object.entries(nodes)) {
            if(!value.visited) {
                unvisited_nodes.push(value);
            }
        }
        if(unvisited_nodes.length == prev_count && prev_current_node == current_node) {
            lock_count = lock_count + 1;
        }
        if (lock_count == 10 ) {
            alert("There is no route to the destination node.");
            no_route = true;
        }

        // selects closest unvisted node as the current node
        unvisited_nodes.forEach(unvisited_node => {
            if(unvisited_node.distance < distance) {
                current_node = unvisited_node;
                distance = unvisited_node.distance;
            }
        })
        console.log(current_node.id);
        var current_id = current_node.id;
        let closest_nodes = [nodes[generate_ids(current_id, "-", 1)], nodes[generate_ids(current_id, "+", 1)], nodes[generate_ids(current_id, "-", 20)], nodes[generate_ids(current_id, "+", 20)]];
        current_node.visit();

        closest_nodes.forEach(node => {
            if(node != null) {
                if(current_node.distance <= node.distance && node.object.style.color != "black" && node.object.style.color != "red" && !node.visited) {
                    node.distance = current_node.distance + 1;
                    node.previous = current_node;
                    nodes[node.id] = node;
                }
            }
        })
        nodes[current_node.id].visit();
        prev_count = unvisited_nodes.length;
        prev_current_node = nodes[current_node.id];
        unvisited_nodes = [];
        destination_node = nodes[destination_node.id];
        count = count + 1;
        
        if(count % 4 == 0) {
            let sleep = new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 100)
            });
    
            await sleep;
        };
    }

    var reached_start = false;
    var current_node = destination_node;
    while(!reached_start && !no_route) {
        var previous = current_node.previous;
        if(previous.id == start_node.id) {
            reached_start = true;
            break;
        }
        previous.object.style.color = "gold";
        current_node = previous;
        let sleep = new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 50)
        });

        await sleep;
    }

    var end_time = performance.now();
    var timer = document.getElementById("timer");
    var time_taken = Math.round(end_time - start_time);
    timer.textContent = "The last computation took " + time_taken + "ms to complete";
    var complexity = document.getElementById("complexity");
    complexity.textContent = "The complexity of this algorithm is O(ElogV) E = Edges, V = Vertices. It doesn't use a heuristic, and is simple to implement.";
}   


function generate_ids(id, opcode, operand) { 
    var column = Math.floor(id / 20);
    var new_id = opcode == "-" ? id - operand : id + operand;
    var new_id_column = Math.floor(new_id / 20);
    if(operand == 1 && new_id_column != column){
        return null;
    } else if (operand == 20 && opcode == "-" && new_id_column != column - 1) {
        return null;
    } else if (operand == 20 && opcode == "+" && new_id_column != column + 1) {
        return null;
    }
    return new_id;
}