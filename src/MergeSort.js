import Bar from './Bar.js';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function MergeSort(size) {
    var start_time = performance.now();
    let bars = [];
    for(var i = 0; i < size; i++) {
        var bar = new Bar(i);
        bars.push(bar);
    }
    await ms(bars);
    var end_time = performance.now();
    var timer = document.getElementById("timer");
    var time_taken = Math.round(end_time - start_time);
    timer.textContent = "The last computation took " + time_taken + "ms to complete";
    var complexity = document.getElementById("complexity");
    complexity.textContent = "The complexity of this algorithm is O(n logn). It uses recursion do divide lists and rebuild.";
}


async function merge(list1, list2) {
    let merged = [];
    let original = [];
    list1.forEach(item => {
        original.push(parseInt(item.object.id));
    })
    list2.forEach(item => {
        original.push(parseInt(item.object.id));
    })
    while(list1.length && list2.length) {
        if(list1[0].value < list2[0].value) {
            merged.push(list1.shift());
        } else {
            merged.push(list2.shift());
        }
    }
    let res = [...merged, ...list1, ...list2];
    original.sort(function(a, b) {
        return a - b;
    });
    for(let i = 0; i < res.length; i ++) {
        document.getElementById(original[i]).style.minHeight = res[i].value + "px";
        document.getElementById(original[i]).style.background = "blue";
        await sleep(1);
    }
    console.log(original);
    return res;
    
}

async function ms(list) { 
    let arr = [];
    list.forEach(bar => {
        arr.push(bar);
    })
    const mid = arr.length / 2;
    if(arr.length < 2) {
        return arr;
    } 
    const left = arr.splice(0, mid);
    let l = await ms(left);
    let r = await ms(arr);

    let m = await merge(l, r);
    return m;
}