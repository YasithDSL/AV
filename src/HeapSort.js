import Bar from './Bar.js';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function HeapSort(size) {
    var start_time = performance.now();
    let bars = [];
    for(var i = 0; i < size; i++) {
        var bar = new Bar(i);
        bars.push(bar);
    }

    for(var i = Math.floor(size / 2 )- 1; i >= 0; i--) {
        await heapify(bars, size, i);
    }

    for(var i = size -1; i > 0; i--) {
        var temp = bars[0].value;
        bars[0].setHeight(bars[i].value);
        bars[0].setColour("blue");
        bars[i].setHeight(temp);
        bars[i].setColour("blue");
        await sleep(1);
        await heapify(bars, i, 0);
    }
    var end_time = performance.now();
    var timer = document.getElementById("timer");
    var time_taken = Math.round(end_time - start_time);
    timer.textContent = "The last computation took " + time_taken + "ms to complete";
    var complexity = document.getElementById("complexity");
    complexity.textContent = "The complexity of this algorithm is O(n logn). It uses a (max) heap and recursion in this implementation.";
}

async function heapify(array, n, i) {
    let largest = i;
    let left = (2 * i) + 1;
    let right = (2 * i) + 2;

    if(left < n && array[left].value >= array[largest].value) {
        largest = left;
    }

    if(right < n && array[right].value >= array[largest].value) {
        largest = right;
    }

    if(largest != i) {
        let swap = array[i].value;
        array[i].setHeight(array[largest].value);
        array[i].setColour("green");
        array[largest].setHeight(swap);
        array[largest].setColour("green");
        console.log("HEY");
        await sleep(1);
        await heapify(array, n, largest);
    }
}