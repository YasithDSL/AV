import Bar from './Bar.js';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Insertion(size) {
    var start_time = performance.now();
    let bars = [];
    for(var i = 0; i < size; i++) {
        var bar = new Bar(i);
        bars.push(bar);
    }
    let continueSort = true;
    if(size > 200) {
        continueSort = window.confirm("Insertion sort will take a long time to complete for datasets of this size");
    }
    if(continueSort) {
        for(let i = 1; i < bars.length; i++) {
            let current_bar = bars[i].value;
            bars[i].setColour("green");
            let j = i - 1;
            
            while((j > -1) && (current_bar < bars[j].value)) {
                bars[j + 1].value = bars[j].value;
                bars[j + 1].setHeight(bars[j].value);
                await sleep(1);
                j--;
            } 
            bars[j+1].value = current_bar;
            bars[j+1].setHeight(current_bar);
            bars[j+1].setColour("blue");
        }
        for(let i = 0; i < bars.length; i++) {
            bars[i].setColour("blue");
            await sleep(1);
        }
        var end_time = performance.now();
        var timer = document.getElementById("timer");
        var time_taken = Math.round(end_time - start_time);
        timer.textContent = "The last computation took " + time_taken + "ms to complete";
        var complexity = document.getElementById("complexity");
        complexity.textContent = "The complexity of this algorithm is O(n²). It is simple to implement.";
    }

}
