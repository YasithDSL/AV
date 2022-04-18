export default class Bar {
    object = null;
    value = 0;

    constructor(id){
        this.object = document.getElementById(id);
        this.value = parseInt(this.object.getAttribute("value"));
    }

    setColour(color) {
        this.object.style.background = color;
    }
    
    setHeight(height) {
        this.object.style.minHeight = height + "px";
        this.value = height;
    }
}