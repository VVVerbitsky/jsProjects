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
let firstNumber=0;
let secondNumber=0;
let onScreenNumber    = 0;
let offScreenNumber   = 0;
let accessForOperator = true;
let continueNumber    = false;
let operator='empty';
let hardNumberPrepareToSave=false;
let hardNumber;
//const operators = ['/', '*', '+', '-']; //unusable yet mb never?
function addNumber(){ 
    const type=this.getAttribute('data-type');
    const inLine=line.innerHTML;
    if (continueNumber==true){
        line.innerHTML = inLine+type;
    } else {
        line.innerHTML     = type;
        continueNumber    = true;
    }
    if(line.innerHTML.length>20){
        line.innerHTML     = 'too long';
    }
}   
function addOperator(){
    operator=this.getAttribute('data-type');
    offScreenNumber=+line.innerHTML;
    firstNumber=offScreenNumber;
    continueNumber=false;
    hardNumberPrepareToSave=true;

}
function clearLine(){
    line.innerHTML='0';
    operator='empty';
    continueNumber   = false;
}

function result(){
    onScreenNumber=+line.innerHTML;
    secondNumber=onScreenNumber;
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
    };
    offScreenNumber=+line.innerHTML;
    continueNumber=false;
}