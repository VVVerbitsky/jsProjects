"use strict"
const winningPositions = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];
let countOfMarkedCells = 0;
let playerXwinsCounter = 0;
let playerOwinsCounter = 0;
let drawCounter        = 0;
let endGame            = false;
let player             = 'X';
const cells            = document.getElementsByClassName('cell');

for(let i=0; i<cells.length; i++){
    cells[i].addEventListener('click',marksInOrderOfPriority);
}

function marksInOrderOfPriority() {
    const cellContent      = this.innerHTML;
    if(cellContent=='' && endGame!=true){
        countOfMarkedCells++;
        if(player=='X'){
            this.innerHTML = 'X';
            player         = '0';
        }else{
            this.innerHTML = '0';
            player         = 'X';
        }
        let winner         = winningCheck();
        statistic(winner);
    }
}

function winningCheck(){
    let winner
    for(let j=0;j<winningPositions.length;j++){
        let id                           = winningPositions[j];

        if(cells[id[0]].innerHTML!='' && cells[id[0]].innerHTML==cells[id[1]].innerHTML && cells[id[1]].innerHTML==cells[id[2]].innerHTML){
            winner                       = cells[id[0]].innerHTML;

            for(let i=0;i<3;i++){
                cells[id[i]].style.color = 'red';
            }
            endGame                      = true;
            return winner;
        }
    }
    if (countOfMarkedCells==9){
        for(let i=0;i<cells.length;i++){
            cells[i].style.color         = 'red';
        }
        endGame                          = true;
        winner                           = 'draw';
        return winner;
    }
}

function statistic(winner){
    if(endGame==true){
        if (winner=='X') {
            playerXwinsCounter++;
            const winX      =document.getElementById('playerX');
            winX.innerHTML  ='player X win:'+playerXwinsCounter;
        } else if (winner=='0') {
            playerOwinsCounter++;
            const winO      =document.getElementById('playerO');
            winO.innerHTML  ='player 0 win:'+playerOwinsCounter;
        } else {
            drawCounter++;
            const draw     =document.getElementById('draw');
            draw.innerHTML ='draw:'+drawCounter;
        }
    }
}

function clear(){
    for(let i=0;i<cells.length;i++){
        cells[i].style.color ='black';
        cells[i].innerHTML   ='';
    }
    countOfMarkedCells       =0;
    endGame                  =false;
    player                   ='X';
}
const clearField =document.getElementById('clearField');
clearField.addEventListener('click',clear);