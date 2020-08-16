const winIndex = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];
let bothPlayers=0;
let winTime=0;
let winBothTime=0;
let playerX=0,playerO=0;
let id;
let player=true;
const pixels=document.getElementsByClassName('pixel');
const clearField=document.getElementById('clearField');
clearField.addEventListener('click',clear);
for(let i=0;i<pixels.length;i++){
    pixels[i].addEventListener('click',ticORtac);
};
let count=0;
function ticORtac(){
    const pixCont=this.innerHTML;
        if(pixCont==''&&id!=true){
            count++;
            if(player==true){
                this.innerHTML='X';
                player=false;
            }else{
                this.innerHTML='0';
                player=true;
            }
        };
    check();
}
function check(){
    for(let j=0;j<winIndex.length;j++){
        id=winIndex[j];
        if(pixels[id[0]].innerHTML==pixels[id[1]].innerHTML&&pixels[id[1]].innerHTML==pixels[id[2]].innerHTML&&pixels[id[0]].innerHTML!=''){
            for(i=0;i<3;i++){
                pixels[id[i]].style.color='red';
            };
            id=true;
            winTime++;
            statistic();
            break;
        }
    };
    let both=true;
    for(let i=0;i<pixels.length;i++){
        if(pixels[i].innerHTML==''){
           both=false; 
        }
    };
    if(both==true&&id!=true&&winBothTime==0){
        bothPlayers++;
        winBothTime++;
        const noWin=document.getElementById('draw');
        noWin.innerHTML='draw:'+bothPlayers;
    };
};
function clear(){
    for(let i=0;i<pixels.length;i++){
        pixels[i].style.color='black';
        pixels[i].innerHTML='';
    };
    id=false;
    player=true;
    winTime=0;
    winBothTime=0;
};
function statistic(){
    if(winTime==1){
        if(player==false){
            playerX++;
            const winX=document.getElementById('playerX');
            winX.innerHTML='player X win:'+playerX;
        }else{
            playerO++;
            const winO=document.getElementById('playerO');
            winO.innerHTML='player 0 win:'+playerO;
        };
    }    
};
