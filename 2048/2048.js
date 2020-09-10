"use strict"
!function () {
    //[bg color][text color]
    const colorsLibrary = {
        2: ['rgb(238, 228, 218)', 'rgb(119, 110, 101)'],
        4: ['rgb(237, 224, 200)', 'rgb(119, 110, 101)'],
        8: ['rgb(242, 177, 121)', 'rgb(249, 246, 242)'],
        16: ['rgb(245, 149, 99)', 'rgb(249, 246, 242)'],
        32: ['rgb(246, 124, 95)', 'rgb(249, 246, 242)'],
        64: ['rgb(246, 94, 59)', 'rgb(249, 246, 242)'],
        128: ['rgb(237, 207, 114)', 'rgb(249, 246, 242)'],
        256: ['rgb(237, 204, 97)', 'rgb(249, 246, 242)'],
        512: ['rgb(237, 200, 80)', 'rgb(249, 246, 242)'],
        1024: ['rgb(237, 197, 63)', 'rgb(249, 246, 242)'],
        2048: ['rgb(237, 194, 46)', 'rgb(249, 246, 242)']
    };
    //fieldINarray[line][row][number in filled cell = 0 or count to move = 1] 
    let fieldINarray = [[[0, 0], [0, 0], [0, 0], [0, 0]],
                        [[1024, 0], [0, 0], [0, 0], [8, 0]],
                        [[2, 0], [256, 0], [4, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [32, 0]]];
    console.log('array test', fieldINarray[1][0][0])

    function drawField(sizeX, sizeY) { //x-line, y-row
        for (let x = 0; x < sizeX; x++) {
            let divX = document.createElement('div');
            divX.className = 'line';
            for (let y = 0; y < sizeY; y++) {
                let divY = document.createElement('div');
                divY.className = 'cell';
                divY.id = x + ',' + y;
                divY.test = x + ',' + y;
                divX.appendChild(divY);
            }
            document.getElementById('field').appendChild(divX);
        }
    }

    drawField(4, 4);


    function fillingFieldWithArray(fieldINarray) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let cellsInnerNumberINarray = fieldINarray[i][j][0];
                if (cellsInnerNumberINarray != 0) {
                    console.log('detected not empty cell - ', cellsInnerNumberINarray);
                    const cell = document.getElementById(i + ',' + j);
                    // console.log(cell.innerHTML,' cellsInner')
                    const filledCell = document.createElement('div');
                    filledCell.className = 'filled';
                    filledCell.style.scale=2;

                    filledCell.style.backgroundColor = colorsLibrary[cellsInnerNumberINarray][0];
                    filledCell.style.color = colorsLibrary[cellsInnerNumberINarray][1];
                    filledCell.innerHTML = cellsInnerNumberINarray;
                    cell.innerHTML = '';
                    cell.appendChild(filledCell); 
                    // Array.map((asdas) =>( <div className="filled" style={{backgroundColor: sda}}>{cellsInnerNumberINarray}</div>))
                   
                }
            }
        }

    }
    fillingFieldWithArray(fieldINarray);
    document.onkeydown = function (arrowKey) {
        switch (arrowKey.keyCode) {
            case 37:
                filledCell.style.marginLeft = +filledCell.style.marginLeft.split('px')[0] - 110 + 'px';
                console.log('left');
                break;
            case 38:
                filledCell.style.marginTop = +filledCell.style.marginTop.split('px')[0] - 110 + 'px';
                console.log('up');
                break;
            case 39:
                filledCell.style.marginLeft = +filledCell.style.marginLeft.split('px')[0] + 110 + 'px';
                console.log('right');
                break;
            case 40:
                filledCell.style.marginTop = +filledCell.style.marginTop.split('px')[0] + 110 + 'px';
                // moveDown();
                console.log('down');
                break;
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomEmptyCellCoordinations() {//can i do it without inner function???
        // let x;
        // let y;
        // !function(){
        //     let x=getRandomInt(0,3);
        //     let y=getRandomInt(0,3);
        //     console.log('maybe not empty random cell:', x,':',y);
        //     console.log('fieldINarray inner', fieldINarray[x][y][0]);
        //     console.log('fieldINarray inner example', fieldINarray[1][0][0]);
        //     if(fieldINarray[x][y][0]!=0){
        //         getRandomEmptyCellCoordinations();
        //         console.log('not zero detected')
        //     } 
        // }
        //     return [x,y] 


        let x = getRandomInt(0, 3);
        let y = getRandomInt(0, 3);
        console.log('maybe not empty random cell:', x, ':', y);
        console.log('fieldINarray inner', fieldINarray[x][y][0]);
        // console.log('fieldINarray inner example', fieldINarray[1][0][0]);
        if (fieldINarray[x][y][0] != 0) {
            [x, y] = getRandomEmptyCellCoordinations();
            console.log('not zero detected')
        }
        return [x, y]
    }
    function getRandomInnerNumber() {
        let cellContent = getRandomInt(2, 4) < 4 ? 2 : 4;
        return cellContent
    }
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
    let forRandomSpawnTest
    function filledRandomEmptyCellINarray() { //for spawn one filled cell after each players move
        const cellCoordinations = getRandomEmptyCellCoordinations();
        const x = cellCoordinations[0];
        const y = cellCoordinations[1];
        const innerNumber = getRandomInnerNumber();
        fieldINarray[x][y][0] = innerNumber;
        console.warn(x, ':', y, '; ', innerNumber)
        let tag='#'+x+','+y+'>'+ 'div';
        // document.getElementById(x+','+y).querySelector('div').style.transform='scale(1.2)';
        let div=document.getElementById(x+','+y)
        
        console.warn(document.querySelector('div[test='+x+','+y+']'))
    }
    filledRandomEmptyCellINarray();
    fillingFieldWithArray(fieldINarray);
   

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