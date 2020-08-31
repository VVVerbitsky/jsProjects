"use strict"
!function(){
    let colorsLibrary={ 2:   'rgb(238, 228, 218)',
                        4:   'rgb(237, 224, 200)',
                        8:   'rgb(242, 177, 121)',
                        16:  'rgb(245, 149, 99)',
                        32:  'rgb(246, 124, 95)',
                        64:  'rgb(246, 94, 59)',
                        128: 'rgb(237, 207, 114)',
                        256: 'rgb(237, 204, 97)',
                        512: 'rgb(237, 200, 280)',
                        1024:'rgb(237, 197, 63)',
                        2048:'rgb(237, 224, 200)'}
    document.onkeydown=function(arrowKey){
        switch(arrowKey.keyCode){
            case 37:
                filledCell.style.marginLeft=+filledCell.style.marginLeft.split('px')[0]-110+'px';
                console.log('left');
                break;
            case 38:
                filledCell.style.marginTop=+filledCell.style.marginTop.split('px')[0]-110+'px';
                console.log('up');
                break;
            case 39:
                filledCell.style.marginLeft=+filledCell.style.marginLeft.split('px')[0]+110+'px';
                console.log('right');
                break;
            case 40:
                // filledCell.style.marginTop=+filledCell.style.marginTop.split('px')[0]+110+'px';
                moveDown();
                console.log('down');
                break;
        }
    }
    function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    function drawField(sizeX, sizeY){
        for(let x=0;x<sizeX;x++){
            let divX=document.createElement('div');
            divX.className='line';
            for(let y=0;y<sizeY;y++){
                let divY=document.createElement('div');
                divY.className='cell';
                divY.id=x+','+y;
                divX.appendChild(divY);
            }
            document.getElementById('field').appendChild(divX);
        }
    }
    drawField(4, 4);
    function spawnFilledCell(x, y){
        let cell=document.getElementById(x+','+y);
        let filledCell=document.createElement('div');
        filledCell.className='filled';
        filledCell.style.backgroundColor='rgb(238, 228, 218)';
        filledCell.style.color='rgb(119, 110, 101)'
        let cellContent=getRandomInt(2,4);
        filledCell.innerHTML=cellContent>3? 4:2;
        cell.appendChild(filledCell);
    }
    function spawnFilledCellINrandomCell(){
        let x=getRandomInt(0,3);
        let y=getRandomInt(0,3);
        let checkingCellContent=document.getElementById(x+','+y).innerHTML;
        if(checkingCellContent==''){
            spawnFilledCell(x, y);
        } else{
            console.log('cannot fill filled cell');
            spawnFilledCellINrandomCell()}
    }

    function startSpawn(){
        spawnFilledCellINrandomCell();
        spawnFilledCellINrandomCell()
    };
    startSpawn();
    let test=document.getElementsByClassName('cell');
    for (let i=0;i<test.length;i++){
        console.log(test[i].innerHTML)
    }
    // spawnFilledCell(2, 2)
    console.log(document.getElementById('0,0').innerHTML,'-----inner')
    // document.getElementById('0,0')
    function moveDown(){
        // const cells=document.getElementsByClassName('cell');
        for(let line=2; line>=0; line--){
            for(let row=0; row<=3; row++){
                if (line==2){
                    if(document.getElementById((line+1)+','+row)==''){
                        movingCellMargin=document.getElementById(line+','+row).style.marginTop;
                        movingCellMargin=movingCellMargin.split('px')[0]+110+'px';
                    }
                }
            }
        }
    }
}()