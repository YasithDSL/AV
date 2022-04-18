import Cell from './Cell';

export default async function AStar() {
    var start_time = performance.now();
    var buttons = document.querySelectorAll("button");
    var invBtns = ["Djikstras", "Edit", "A-Star", "TargetNode", "StartNode", "Save", "Reset", "ResetVisitedNodes", "Increase", "Decrease"];
    var nodes = {};
    var destination_node;
    var start_node;

    var nodes_list = [];
    buttons.forEach(button => {
        if(!invBtns.includes(button.getAttribute("id"))) {
            var cell = new Cell(button.id);
            switch(button.style.color) {
                case "black":
                    cell.visited=true;
                    cell.traversable = false;
                    break;
                case "green":
                    destination_node = cell;
                    break;
                case "red":
                    cell.totalcost = 0;
                    cell.distance = 0;
                    start_node = cell;
                    break;
            }
            nodes[button.id] = cell;
            nodes_list.push(cell);
        }
    });
    if(start_node == null || destination_node == null) {
        alert("No start or destination node has been specified. Please try again.");
        return;
    }
    var visited = [];
    var open_list = [];
    // implement no route feature after initial implementation
    // Add slow drawing of visited nodes
    var no_route = false;
    var count = 1;
    open_list.push(start_node);
    while(!destination_node.visited && !no_route) {
        if(open_list.length == 0) {
            alert("There is no route to the destination node.");
            no_route = true;
            continue;
        }

        var current = open_list[0];
        console.log(open_list.length);
        for(var i = 0; i < open_list.length; i++) {
            if(open_list[i].totalcost < current.totalcost) {
                current = open_list[i];
            }
        }
        
        open_list = remove(open_list, current);
        current.visit();
        visited.push(nodes[current.id]);
        if(current == destination_node) {
            destination_node.visit();
        }
        let current_id = current.id;
        let closest_nodes = [nodes[generate_ids(current_id, "-", 1)], nodes[generate_ids(current_id, "+", 1)], nodes[generate_ids(current_id, "-", 20)], nodes[generate_ids(current_id, "+", 20)]];
        for(var i = 0; i < closest_nodes.length; i++) {
            if(closest_nodes[i] != null) {
                if(!closest_nodes[i].traversable || visited.includes(closest_nodes[i])) {
                    console.log("not traversable or is in visited list");
                } else {
                    var distance_to_neighbor = current.distance + 1;
    
                    if(distance_to_neighbor < closest_nodes[i].distance || !open_list.includes(closest_nodes[i])) {
                        console.log("A new shortest path has been found or is not in open list");
                        closest_nodes[i].update_costs(distance_to_neighbor, calculate_cost(destination_node.id, closest_nodes[i].id));
                        closest_nodes[i].previous = current;
                        if(!open_list.includes(closest_nodes[i])) {
                            console.log("Added to open list, new length" + (open_list.length + 1));
                            open_list.push(closest_nodes[i]);
                        }
                    }
                }
            }
        }

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
    complexity.textContent = "The complexity of this algorithm is O(E) E = Edges. It uses a heuristic and is harder to implement (vs Dijkstras).";
}

function remove(list, item) {
    var res_list = [];
    for(var i = 0; i < list.length; i++) {
        if(list[i].id != item.id) {
            res_list.push(list[i]);
        }
    }
    return res_list;
}

function calculate_cost(node, current) { 
    var node_column = Math.floor(node / 20);
    var current_column = Math.floor(current / 20);
    var node_row = node % 20;
    var current_row = current % 20;
    var cost = Math.abs(current_column - node_column) + Math.abs(current_row - node_row);
    return cost;
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