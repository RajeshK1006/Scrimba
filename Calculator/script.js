// calculatoor app

let displayValue = document.getElementById("calc");

function takeValue(v){
    displayValue.value += v;
}


function clear(){
    displayValue.value = "";
}

