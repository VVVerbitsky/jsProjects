document.addEventListener('keydown', func);
function func(arrowKey){
    moveTo(arrowKey, fieldINarray)
}

const delayTime=150

function moveTo(arrowKey, fieldINarr){
    switch (arrowKey.keyCode) {
        case 37:
            // filledCell.style.marginLeft = +filledCell.style.marginLeft.split('px')[0] - 110 + 'px';
            moveLeft(fieldINarr)
            console.log('left');
            break;
        case 38:
            // filledCell.style.marginTop = +filledCell.style.marginTop.split('px')[0] - 110 + 'px';
            moveUp(fieldINarr)
            console.log('up');
            break;
        case 39:
            // filledCell.style.marginLeft = +filledCell.style.marginLeft.split('px')[0] + 110 + 'px';
            moveRight(fieldINarr)
            console.log('right');
            break;
        case 40:
            // filledCell.style.marginTop = +filledCell.style.marginTop.split('px')[0] + 110 + 'px';
            moveDown(fieldINarr)
            console.log('down');
            break;
    }
}
function moveDown(fieldINarr){
    
    // console.log(fieldINarr);
    if( moveTheFieldINarrDown(fieldINarr) ){
        document.removeEventListener('keydown', func);
        transportBlocksDown(fieldINarr);
        setTimeout(()=>{
            console.log('pause')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
            // console.log(fieldINarr);
            document.addEventListener('keydown', func);
        }, delayTime)
    }
}
function transportBlocksDown(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
                // console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
                // console.log(filledCell.style.marginTop)
                filledCell.style.marginTop=filledCell.style.marginTop.split('px')[0] + 110*fieldINarr[row][column][1] + 'px';
                // console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}

function moveUp(fieldINarr){
    
    // console.log(fieldINarr);
    if( moveTheFieldINarrUp(fieldINarr) ){
        document.removeEventListener('keydown', func);
        transportBlocksUp(fieldINarr);
        setTimeout(()=>{
            console.log('pause')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
          //  console.log(fieldINarr);
            document.addEventListener('keydown', func);
        }, delayTime)
    }
}
function transportBlocksUp(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
         //       console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
         //       console.log(filledCell.style.marginTop)
                filledCell.style.marginTop=filledCell.style.marginTop.split('px')[0] - 110*fieldINarr[row][column][1] + 'px';
          //      console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}

function moveLeft(fieldINarr){
    
 //   console.log(fieldINarr);
    if( moveTheFieldINarrLeft(fieldINarr) ){
        document.removeEventListener('keydown', func);
        transportBlocksLeft(fieldINarr);
        setTimeout(()=>{
            console.log('pause--left')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
       //     console.log(fieldINarr);
            document.addEventListener('keydown', func);
        }, delayTime)
    }
}
function transportBlocksLeft(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
        //        console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
        //        console.log(filledCell.style.marginTop)
                filledCell.style.marginLeft=filledCell.style.marginLeft.split('px')[0] - 110*fieldINarr[row][column][1] + 'px';
        //        console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}

function moveRight(fieldINarr){
    
  //  console.log(fieldINarr);
    if( moveTheFieldINarrRight(fieldINarr) ){
        document.removeEventListener('keydown', func);
        transportBlocksRight(fieldINarr);
        setTimeout(()=>{
            console.log('pause')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
      //      console.log(fieldINarr);
            document.addEventListener('keydown', func);
        }, delayTime)
    }
}
function transportBlocksRight(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
        //        console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
       //         console.log(filledCell.style.marginTop)
                filledCell.style.marginLeft=filledCell.style.marginLeft.split('px')[0] + 110*fieldINarr[row][column][1] + 'px';
       //         console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}



