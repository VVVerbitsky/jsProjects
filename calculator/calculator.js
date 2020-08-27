"use strict"
//bugs:
//first pressed button is '.';
//bug with impossible '0.13.2.33 numbers'
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
clear.addEventListener('click', clearAll);
const ecvals     = document.getElementById('ecvals');
ecvals.addEventListener('click', result);
let hardNumber=0;
let softNumber=0;
let number;
let saveTOhard=false;
let previousEventISaddNumber;
let operator=null;
function addNumber(){
    if(line.innerHTML=='too long'){
        clearAll();
    } 
    const type=this.getAttribute('data-type');
    console.log(previousEventISaddNumber);
    if(previousEventISaddNumber==true){
        line.innerHTML=line.innerHTML+type;
    } else{
        line.innerHTML=type;
    }
    previousEventISaddNumber=true;
    number=+line.innerHTML;
    if(line.innerHTML.length>21){
        line.innerHTML='too long';
    }
    if (saveTOhard==true){
        hardNumber=number;
    } else {
        softNumber=number;
    }
}   
function addOperator(){
    if(line.innerHTML=='too long'){
        clearAll();
    } 
    operator=this.getAttribute('data-type');
    previousEventISaddNumber=false;
    saveTOhard=true;


}
function clearAll(){
    line.innerHTML='0';
    hardNumber=0;
    softNumber=0;
    number=undefined;
    saveTOhard=false;
    previousEventISaddNumber=undefined;
    operator=undefined;
}
function result(){
    if(operator!=undefined){
        function fractionalCheck(){
            let fractionalLength=0;
            if (leftNumber%1!=0){
                fractionalLength=(leftNumber+'').split('.').pop().length;
                leftNumber=leftNumber*10**fractionalLength;
                rightNumber=rightNumber*10**fractionalLength;
                
            }
            if (rightNumber%1!=0){
                fractionalLength=fractionalLength+(rightNumber+'').split('.').pop().length;
                leftNumber=leftNumber*10**fractionalLength;
                rightNumber=rightNumber*10**fractionalLength;
            }
            return fractionalLength;
        }
        let leftNumber=softNumber;
        let rightNumber=hardNumber;

        let answer;
        let fractionalLength=fractionalCheck();
        
        console.log(softNumber,' ',operator,' ',hardNumber);
        switch (operator){
            case '/':
                console.log(rightNumber)
                if(rightNumber==0){
                    console.log('test');
                    line.innerHTML='Cannot divide by zero';
                    return
                } else {
                    answer=leftNumber/rightNumber
                    break;
                }
            case '+':
                answer=leftNumber+rightNumber;
                break;
            case '-':
                answer=leftNumber-rightNumber;
                break;   
            case '*':
                answer=leftNumber*rightNumber;
                break;       
        }
        answer=answer/10**fractionalLength;
        line.innerHTML=answer;
        softNumber=answer;
        previousEventISaddNumber=false;
        saveTOhard=false;
        if(line.innerHTML.length>21){
            line.innerHTML='too long';
        }
    }
}