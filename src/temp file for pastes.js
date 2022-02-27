for(var i = 0; i < count; i++) {
    console.log("new i");
    bars.forEach(bar => {
        console.log(bar.value);
    })
    var hasSwapped = false;
    for(var j = 0; j < count; j++) {
        if(bars[j].value > bars[j + 1].value) {
            console.log("swap time");
            var temp = bars[j];
            var bar1ID = bars[j].id;
            var bar2ID = bars[j + 1].id;
            bars[j] = bars[j + 1];
            console.log(bars[j].value);
            barsDict[bar1ID].object.style.minHeight = bars[j].value + "px";
            barsDict[bar1ID].object.setAttribute("value", bars[j].value);
            bars[j + 1] = temp;
            console.log(bars[j + 1].value);
            barsDict[bar2ID].object.style.minHeight = bars[j + 1].value + "px";
            barsDict[bar2ID].object.setAttribute("value", bars[j + 1].value);
            hasSwapped = true;

            let sleep = new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 100)
            });
    
            await sleep;
        }
    }
    if(hasSwapped == false) {
        break;
    }
}


console.log("HI");
var temp = bars[0];
console.log("First bar is of length " + temp.value + " and second bar is of length " + bars[1].value);
bars[0] = bars[1];
bars[1] = temp;
console.log("Now First bar is of length " + bars[0].value + " and second bar is of length " + bars[1].value);
console.log(bars[0].id);
console.log(bars[1].id);
console.log(document.getElementById(bars[0].id).style.minHeight);
console.log(document.getElementById(bars[1].id).style.minHeight);
document.getElementById(bars[0].id).style.minHeight = bars[1].value + "px";
document.getElementById(bars[1].id).style.minHeight = bars[0].value + "px";
console.log(document.getElementById(bars[0].id).style.minHeight);
console.log(document.getElementById(bars[1].id).style.minHeight);


for(var i = 0; i < count; i++) {
    console.log("new i");
    bars.forEach(bar => {
        console.log(bar.value);
    })
    var hasSwapped = false;
    for(var j = 0; j < count; j++) {
        if(bars[j].value > bars[j + 1].value) {
            console.log("swap time");
            var temp = bars[j];
            console.log("First bar is of length " + temp.value + " and second bar is of length " + bars[j + 1].value);
            bars[j] = bars[j + 1];
            bars[j + 1] = temp;
            console.log("Now First bar is of length " + bars[j].value + " and second bar is of length " + bars[j + 1].value);
            console.log(bars[j].id);
            console.log(bars[j + 1].id);
            console.log(document.getElementById(bars[j].id).style.minHeight);
            console.log(document.getElementById(bars[j + 1].id).style.minHeight);
            document.getElementById(bars[j].id).style.minHeight = bars[j + 1].value + "px";
            document.getElementById(bars[j+1].id).style.minHeight = bars[j].value + "px";
            console.log(document.getElementById(bars[j].id).style.minHeight);
            console.log(document.getElementById(bars[j + 1].id).style.minHeight);
            hasSwapped = true;

            let sleep = new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 1000)
            });
    
            await sleep;
        }
    }
    if(hasSwapped == false) {
        break;
    }
}