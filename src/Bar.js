export default class Bar {
    object = null;
    value = 0;

    constructor(id){
        this.object = document.getElementById(id);
        this.value = parseInt(this.object.getAttribute("value"));
    }

    
}