import Bar from './Bar.js';

export default async function Bubble(size) {
    var start_time = performance.now();
    var bars = [];
    for(var i = 0; i < size; i++) {
        var bar = new Bar(i);
        bars.push(bar);
    }
    let continueSort = true;
    if(size > 200) {
        continueSort = window.confirm("Bubble sort will take a long time to complete for datasets of this size");
    }
    if(continueSort) {
        var count = size - 1;
        for(var i = 0; i < count; i++) {
            var hasSwapped = false;
            var lastSwapped = null;
            for(var j = 0; j < count; j++) {
                if(bars[j].value > bars[j + 1].value) {
                    bars[j].setColour("green");
                    bars[j + 1].setColour("green");
                    let sleep = new Promise((resolve, reject) => {
                        setTimeout(() => resolve(), 1)
                    });
                    await sleep;
                    var temp = bars[j].value;
                    bars[j].setHeight(bars[j + 1].value);
                    bars[j + 1].setHeight(temp);
                    bars[j].setColour("white");
                    bars[j + 1].setColour("white");
                    lastSwapped = bars[j+1];
                    hasSwapped = true;
                }
            }
            if(lastSwapped != null) {
                lastSwapped.setColour("blue");
            }
            if(hasSwapped == false) {
                break;
            }
        }
        bars.forEach(bar => {
            bar.setColour("blue");
        })
    }
    var end_time = performance.now();
    var timer = document.getElementById("timer");
    var time_taken = Math.round(end_time - start_time);
    timer.textContent = "The last computation took " + time_taken + "ms to complete";
    var complexity = document.getElementById("complexity");
    complexity.textContent = "The complexity of this algorithm is O(n²). It is simple to implement.";
}