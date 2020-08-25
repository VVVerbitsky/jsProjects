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
let onScreenNumber=0;
let offScreenNumber=0
let firstNumber=0, secondNumber=0, udefindNumber=0; //firstNumber operator secondNumber = result
let accessForOperator = true;
let accessForNumber   = true;
let operator='empty';
//const operators = ['/', '*', '+', '-']; //unusable yet mb never?
function addNumber(){ 
    const type=this.getAttribute('data-type');
    const inLine=line.innerHTML;
    if (accessForNumber==true){
        if (inLine=='0'){
            line.innerHTML = type
            
        } else {
            line.innerHTML = inLine+type;
        }
        accessForOperator  = true;
    } else {
        line.innerHTML     = type;
        accessForNumber    = true;
    }
    if(line.innerHTML.length>20){
        line.innerHTML     = 'too long';
    }
}   
function addOperator(){
    result();
    operator=this.getAttribute('data-type');
    offScreenNumber=line.innerHTML;
    accesForNumber=false;


}
//     const lastSumbolInLine=inLine.charAt(inLine.length-1);
//     line.innerHTML=inLine+type;
//     if(type=='/'||type=='*'||type=='-'||type=='+'){
//         if(lastSumbolInLine=='/'||lastSumbolInLine=='*'||lastSumbolInLine=='+'||lastSumbolInLine=='-'){
//             line.innerHTML='error';
//         }   
//     };
//     if(line.innerHTML.length>20){
//         line.innerHTML='too long';
//     };
// }

function clearLine(){
    line.innerHTML='0';
    operator='empty';
}

function result(){
    switch (operator){
        case '/':
            line.innerHTML=firstNumber/secondNumber;
            break;
        case '+':
            line.innerHTML=firstNumber+secondNumber;
            break;
        case '-':
            line.innerHTML=firstNumber-secondNumber;
            break;   
        case '*':
            line.innerHTML=firstNumber*secondNumber;
            break;       
    }
    
    if(line.innerHTML.length>20){
        line.innerHTML='too long';
    };
}