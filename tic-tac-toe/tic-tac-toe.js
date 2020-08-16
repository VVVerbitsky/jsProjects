var winIndex = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];
var bothPlayers=0;
var winTime=0;
var winBothTime=0;
var playerX=0,playerO=0;
var id;
var positionX,positionY;
var player=true;
var pixels=document.getElementsByClassName('pixel');
var restart=document.getElementById('restart');
restart.addEventListener('click',clear);
for(var i=0;i<pixels.length;i++){
    pixels[i].addEventListener('click',ticORtac);
};
var count=0;
function ticORtac(){
    var pixCont=this.innerHTML;
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
    for(var j=0;j<winIndex.length;j++){
        id=winIndex[j];
        if(pixels[id[0]].innerHTML==pixels[id[1]].innerHTML&&pixels[id[1]].innerHTML==pixels[id[2]].innerHTML&&pixels[id[0]].innerHTML!=''){
            for(i=0;i<3;i++){
                pixels[id[i]].style.color='red';
                pixels[id[i]].style.borderRadius='100%';
                pixels[id[i]].style.transform='rotate(360deg)';
            };
            id=true;
            winTime++;
            statistic();
            break;
        }
    };
    both=true;
    for(var i=0;i<pixels.length;i++){
        if(pixels[i].innerHTML==''){
           both=false; 
        }
    };
    if(both==true&&id!=true&&winBothTime==0){
        alert('no win');
        bothPlayers++;
        winBothTime++;
        var noWin=document.getElementById('bothWin');
        noWin.innerHTML='no win:'+bothPlayers;
    };
};
function clear(){
    for(var i=0;i<pixels.length;i++){
        pixels[i].style.color='black';
        // pixels[i].style.backgroundColor='white';
        pixels[i].style.borderRadius='0%';
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
            var winX=document.getElementById('playerX');
            winX.innerHTML='player X win:'+playerX;
        }else{
            playerO++;
            var winO=document.getElementById('playerO');
            winO.innerHTML='player 0 win:'+playerO;
        };



    }



    
};



// var player=function play(){
// // who==true?(return:true,who=false):(this.innerHTML='0',player=true)):(alert(this.positionX+':'+this.positionY));
// if()
// }



// function check(){
//     // for(var j=0;j<winIndex;j++){
//     //     var winPixels=winIndex[j];
//     //     if(pixels[winPixels[0]])
//     // }
// }
// function ticORtac(){
// this.innerHTML==''?(player==true?(this.innerHTML='X',player=false):(this.innerHTML='0',player=true)):(alert(this.positionX+':'+this.positionY));
// check();
// }