function displayData(n){
    output.value+=n
}

function evaluateOpertor(){
    output.value=eval(output.value)
}

function allClear(){
    output.value=''
}

function backSpace(){
    output.value=output.value.slice(0,-1)
}