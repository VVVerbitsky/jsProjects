<<<<<<< HEAD
var buttons=document.getElementsByClassName('button');
var line=document.getElementById('line');
var clear=document.getElementById('clear');
var ecvals=document.getElementById('ecvals');
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',func);
}
clear.addEventListener('click',clearing);
ecvals.addEventListener('click',result)
function func(){ 
   var type=this.getAttribute('data-type');
   var inline=line.innerHTML;
    line.innerHTML=line.innerHTML+type;
    if(type=='/'||type=='*'||type=='-'||type=='+'){
        if(inline.charAt(inline.length-1)=='/'||inline.charAt(inline.length-1)=='*'||inline.charAt(inline.length-1)=='+'||inline.charAt(inline.length-1)=='-'){
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
    line.innerHTML=eval(line.innerHTML);
    if(line.innerHTML.length>20){
        line.innerHTML='too long';
    };
=======
var buttons=document.getElementsByClassName('button');
var line=document.getElementById('line');
var clear=document.getElementById('clear');
var ecvals=document.getElementById('ecvals');
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',func);
}
clear.addEventListener('click',clearing);
ecvals.addEventListener('click',result)
function func(){ 
   var type=this.getAttribute('data-type');
   var inline=line.innerHTML;
    line.innerHTML=line.innerHTML+type;
    if(type=='/'||type=='*'||type=='-'||type=='+'){
        if(inline.charAt(inline.length-1)=='/'||inline.charAt(inline.length-1)=='*'||inline.charAt(inline.length-1)=='+'||inline.charAt(inline.length-1)=='-'){
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
    line.innerHTML=eval(line.innerHTML);
    if(line.innerHTML.length>20){
        line.innerHTML='too long';
    };
>>>>>>> 7c4215a62733766663cb01baed1cb35fdeb89b74
}