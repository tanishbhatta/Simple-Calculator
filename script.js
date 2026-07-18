// Calculator js
const display = document.getElementById("calcDisplay");

function addToDisplay(input){
    display.value += input
}

function clearDisplay(input){
    display.value = ""
}

function calculate(input){
    display.value = eval(display.value)
}