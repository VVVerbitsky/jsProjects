"use strict"
!function () {
    
    // console.log('array test', fieldINarray[1][0][0])

    drawField();
    // console.log(document.getElementById('0-1'),'x:0,y:1')
    // console.log(document.getElementById('1-0'),'x:1,y:0')
    // fillingFieldWithArray(fieldINarray);//gonna be deleted later
    !function drawStartField(){
        addRandomFilledCellTOfieldINarray();
        addRandomFilledCellTOfieldINarray();
        fillingFieldWithArray(fieldINarray);
    }()
    // moveTheFieldINarrDown(fieldINarray)
    // console.log(fieldINarray)
   
   

    
    /////////////////////////////////////////////////////////////////
    // function spawnFilledCell(x, y){
    //     let cell=document.getElementById(x+','+y);
    //     let filledCell=document.createElement('div');
    //     filledCell.className='filled';
    //     filledCell.style.backgroundColor='rgb(238, 228, 218)';
    //     filledCell.style.color='rgb(119, 110, 101)'
    //     let cellContent=getRandomInt(2,4);
    //     filledCell.innerHTML=cellContent>3? 4:2;
    //     cell.appendChild(filledCell);
    // }
    //************************************************************************************************************************* */
    // let forRandomSpawnTest
    // function filledRandomEmptyCellINarray() { //for spawn one filled cell after each players move
    //     const cellCoordinations = getRandomEmptyCellCoordinations();
    //     const x = cellCoordinations[0];
    //     const y = cellCoordinations[1];
    //     const innerNumber = getRandomInnerNumber();
    //     fieldINarray[x][y][0] = innerNumber;
    //     console.warn(x, ':', y, '; ', innerNumber)
   
    // }
    // filledRandomEmptyCellINarray();
    // fillingFieldWithArray(fieldINarray);
    //************************************************************************************************************************* */
   

    function startSpawn() {   //in the begining we should always have to random filled cells with number '2' or '4'

    };
    //  startSpawn();
    // let test=document.getElementsByClassName('cell');
    // for (let i=0;i<test.length;i++){
    //     console.log(test[i].innerHTML)
    // }
    // //// spawnFilledCell(2, 2)
    // console.log(document.getElementById('0,0').innerHTML,'-----inner')
    // //// document.getElementById('0,0')
    // function moveDown(){
    //     //// const cells=document.getElementsByClassName('cell');
    //     for(let line=2; line>=0; line--){
    //         for(let row=0; row<=3; row++){
    //             if (line==2){
    //                 if(document.getElementById((line+1)+','+row)==''){
    //                     movingCellMargin=document.getElementById(line+','+row).style.marginTop;
    //                     movingCellMargin=movingCellMargin.split('px')[0]+110+'px';
    //                 }
    //             }
    //         }
    //     }
    // }
    ////////////////////////////////////////////////////////////////////////////////////////////////
}()