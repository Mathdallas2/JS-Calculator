// Calculator program

const display=document.getElementById("Display");

function addToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value=""
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value='Error'
    }
}
function removeLastaChar(){
    display.value=display.value.slice(0, -1)
}