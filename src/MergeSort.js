import Bar from './Bar.js';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function MergeSort(size) {
    let bars = [];
    for(var i = 0; i < size; i++) {
        var bar = new Bar(i);
        bars.push(bar);
    }
    await ms(bars);
    for(let i = 0; i < bars.length; i++) {
        document.getElementById([i]).style.background = "blue";
        await sleep(1);
    }
}


async function merge(list1, list2) {
    let merged = [];
    let og = [];
    list1.forEach(item => {
        og.push(parseInt(item.object.id));
    })
    list2.forEach(item => {
        og.push(parseInt(item.object.id));
    })
    while(list1.length && list2.length) {
        if(list1[0].value < list2[0].value) {
            merged.push(list1.shift());
        } else {
            merged.push(list2.shift());
        }
    }
    let res = [...merged, ...list1, ...list2];
    og.sort(function(a, b) {
        return a - b;
    });
    for(let i = 0; i < res.length; i ++) {
        document.getElementById(og[i]).style.minHeight = res[i].value + "px";
        await sleep(1);
    }
    console.log(og);
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