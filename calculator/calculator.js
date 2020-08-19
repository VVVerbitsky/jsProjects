"use strict"
const buttons = document.getElementsByClassName('button');
const line    = document.getElementById('line');
const clear   = document.getElementById('clear');
const ecvals  = document.getElementById('ecvals');
const operators = ['&divide', '*', '+', '-']; //unusable yet mb never?
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', func);
}
clear.addEventListener('click', clearing);
ecvals.addEventListener('click', result)

function func(){ 
    const type=this.getAttribute('data-type');
    const inLine=line.innerHTML;
    const lastSumbolInLine=inLine.charAt(inLine.length-1);
    line.innerHTML=inLine+type;
    if(type=='/'||type=='*'||type=='-'||type=='+'){
        if(lastSumbolInLine=='/'||lastSumbolInLine=='*'||lastSumbolInLine=='+'||lastSumbolInLine=='-'){
            line.innerHTML='error';
        }   
    };
    if(line.innerHTML.length>20){
        line.innerHTML='too long';
    };
}
function clearing(){
    line.innerHTML='';
}
function result(){
    line.innerHTML=eval(line.innerHTML); //should fix this and after that fix '/' on screen to '&divide'
    if(line.innerHTML.length>20){
        line.innerHTML='too long';
    };
}