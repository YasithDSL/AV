import Cell from './Cell';

export default async function AStar() {
    var buttons = document.querySelectorAll("button");
    var invBtns = ["Djikstras", "Edit", "A-Star", "TargetNode", "StartNode", "Save", "Reset"];
    var nodes = {};
    var destination_node;
    var destination_id;
    var start_node;

    buttons.forEach(button => {
        if(!invBtns.includes(button.getAttribute("id"))) {
            var cell = new Cell(button.id);
            if(button.style.color == "black") {
                cell.visited = true;
            }
            if(button.style.color === "green") {
                destination_node = cell;
                destination_id = button.id;
            } else if(button.style.color === "red") {
                cell.totalcost = 0;
                start_node = cell;
            }
            nodes[button.id] = cell;
        }
    });

    var unvisited_nodes = [];
    var visited = [];

    unvisited_nodes.push(start_node);
    // implement no route feature after initial implementation
    while(!destination_node.visited) {
        var current_node = null;
        unvisited_nodes.forEach(node => {
            if(current_node == null) {
                current_node = nodes[node.id];
            } else if (node.totalcost < current_node.totalcost) {
                current_node = nodes[node.id];
            }
        })

        unvisited_nodes.pop(current_node);
        current_node.visit();
        visited.push(current_node);

        if(current_node.id == destination_node.id) {
            alert("Found.");
            destination_node.visit();
            return;
        }

        var closest_nodes = [nodes[generate_ids(current_node.id, "-", 1)], nodes[generate_ids(current_node.id, "+", 1)], nodes[generate_ids(current_node.id, "-", 20)], nodes[generate_ids(current_node.id, "+", 20)]];
        closest_nodes.forEach(node => {
            var node_dcost = calculate_dcost(start_node.id, node.id);
            var node_hcost = calculate_hcost(destination_node.id, node.id);
            var temp_total = node_dcost + node_hcost;
            var idcheck = false;
            visited.forEach(checknode => {
                if(checknode.id == node.id) {
                    idcheck = true;
                }
            });
            var unvisitedcheck = false
            unvisited_nodes.forEach(checknode => {
                if(checknode.id == node.id) {
                    unvisitedcheck = true;
                }
            })
            if(!idcheck && (!unvisitedcheck || (temp_total < node.totalcost))) {
                node.update_costs(node_dcost, node_hcost);
                node.previous = current_node;
                var unvisitedcheck = false
                unvisited_nodes.forEach(checknode => {
                    if(checknode.id == node.id) {
                        unvisitedcheck = true;
                    }
                })
                if(!unvisitedcheck) {
                    unvisited_nodes.push(node);
                }
                nodes[node.id] = node;
            }

        })
        nodes[current_node.id] = current_node;
    }

}

function calculate_dcost(start, current) { 
    var start_column = Math.floor(start / 20);
    var current_column = Math.floor(current / 20);
    var start_row = start % 20;
    var current_row = current % 20;
    var dcost = Math.abs(current_column - start_column) + Math.abs(current_row - start_row);
    return dcost;
}

function calculate_hcost(destination, current) { 
    var destination_column = Math.floor(destination / 20);
    var current_column = Math.floor(current / 20);
    var destination_row = destination % 20;
    var current_row = current % 20;
    var hcost = Math.abs(current_column - destination_column) + Math.abs(current_row - destination_row);
    return hcost;
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