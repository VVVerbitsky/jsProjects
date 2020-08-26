"use strict"
const line      = document.getElementById('line');

const numbers   = document.getElementsByClassName('number');
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click', addNumber);
}
const operators = document.getElementsByClassName('operator');
for(let i=0;i<operators.length;i++){
    operators[i].addEventListener('click', addOperator);
}
const clear     = document.getElementById('clear');
clear.addEventListener('click', clearLine);
const ecvals     = document.getElementById('ecvals');
ecvals.addEventListener('click', result);
let hardNumber=0;
let softNumber=0;
let number;
let saveTOhard=false;
let onScreenNumber    = 0;
let offScreenNumber   = 0;
let previousEventISaddNumber;
//const operators = ['/', '*', '+', '-']; //unusable yet mb never?
function addNumber(){ 
    const type=this.getAttribute('data-type');
    if(previousEventISaddNumber==false){
        line.innerHTML=line.innerHTML+type;
    } else{
        line.innerHTML=type;
    }
    previousEventISaddNumber=true;
    number=+line.innerHTML;
    if(number.length>20){
        line.innerHTML='too long';
    }
}   
function addOperator(){
    operator=this.getAttribute('data-type');
    previousEventISaddNumber=false;


}
function clearLine(){
    line.innerHTML='0';
}

function result(){
    
    console.log(offScreenNumber,' ',operator,' ',onScreenNumber)
    switch (operator){
        case '/':
            line.innerHTML=offScreenNumber/onScreenNumber;
            break;
        case '+':
            line.innerHTML=offScreenNumber+onScreenNumber;
            break;
        case '-':
            line.innerHTML=offScreenNumber-onScreenNumber;
            break;   
        case '*':
            line.innerHTML=offScreenNumber*onScreenNumber;
            break;       
    }
    
    if(line.innerHTML.length>20){
        line.innerHTML='too long';
    }
}