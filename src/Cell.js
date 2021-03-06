export default class Cell {
    object = null;
    visited = false;

    distance = Number.MAX_VALUE;
    heuristic = Number.MAX_VALUE;
    totalcost = Number.MAX_VALUE;

    label = "blank";
    previous = null;
    id = null;
    traversable = true;


    constructor(cell_id) {
        this.object = document.getElementById(cell_id);
        
        if(this.object.style.color === "purple" || this.object.style.color == "red") {
            this.visited = true;
        } 
        this.id = parseInt(this.object.id);
    }

    visit() {
        this.visited = true;

        if(this.object.style.color != "red" && this.object.style.color != "green") {
            this.object.style.color = "blue";
        }
    }

    update_costs(dcost, hcost) { 
        this.distance = dcost;
        this.heuristic = hcost;
        this.totalcost = dcost + hcost;
    }

}
