document.addEventListener('keydown', function(arrowKey) {
    moveTo(arrowKey, fieldINarray)
});

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
    console.log(fieldINarr);
    if( moveTheFieldINarrDown(fieldINarr) ){
        addRandomFilledCellTOfieldINarray();
        fillingFieldWithArray(fieldINarr);
        console.log(fieldINarr);
    }
}
function moveUp(fieldINarr){
    console.log(fieldINarr);
    if( moveTheFieldINarrUp(fieldINarr) ){
        addRandomFilledCellTOfieldINarray();
        fillingFieldWithArray(fieldINarr);
        console.log(fieldINarr);
    }
}
function moveLeft(fieldINarr){
    console.log(fieldINarr);
    if( moveTheFieldINarrLeft(fieldINarr) ){
        addRandomFilledCellTOfieldINarray();
        fillingFieldWithArray(fieldINarr);
        console.log(fieldINarr);
    }
}
function moveRight(fieldINarr){
    console.log(fieldINarr);
    if( moveTheFieldINarrRight(fieldINarr) ){
        addRandomFilledCellTOfieldINarray();
        fillingFieldWithArray(fieldINarr);
        console.log(fieldINarr);
    }
}
function moveTheFieldINarrDown(fieldINarr){
    let permittedMove=false;
    for (let row = 2; row >= 0; row--){
        for (let column = 0; column <= 3; column++){
            if( fieldINarr[row][column][0]!==0 ){
                for(let checkingRow = row+1; checkingRow <= 3; checkingRow++){
                    console.log('now is checking ', checkingRow, 'checkingRow in:',row,' ',column )
                    if( fieldINarr[checkingRow][column][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[checkingRow][column][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        row                                =checkingRow;
                    } else {
                        if( fieldINarr[checkingRow][column][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[checkingRow][column][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            row                                 =checkingRow;
                        }else{
                            break;
                        }
                    } 
                    
                }
            }
        }
    }
    return permittedMove;
}

function moveTheFieldINarrRight(fieldINarr){
    let permittedMove=false;
    for (let column = 2; column >= 0; column--){
        for (let row = 0; row <= 3; row++){
            if( fieldINarr[row][column][0]!==0 ){
                for(let checkingColumn = column+1; checkingColumn <= 3; checkingColumn++){
                    console.log('now is checking ', checkingColumn, 'checkingColumn in:',row,' ',column )
                    if( fieldINarr[row][checkingColumn][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[row][checkingColumn][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        column                             =checkingColumn;
                    } else {
                        if( fieldINarr[row][checkingColumn][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[row][checkingColumn][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            column                              =checkingColumn;
                        }else{
                            break;
                        }
                    } 
                    
                }
            }
        }
    }
    return permittedMove;
}

function moveTheFieldINarrUp(fieldINarr){
    let permittedMove=false;
    for (let row = 1; row <= 3; row++){
        for (let column = 0; column <= 3; column++){
            if( fieldINarr[row][column][0]!==0 ){
                for(let checkingRow = row-1; checkingRow >= 0;checkingRow--){
                    console.log('now is checking ', checkingRow, 'checkingRow in:',row,' ',column )
                    if( fieldINarr[checkingRow][column][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[checkingRow][column][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        row                                =checkingRow;
                    } else {
                        if( fieldINarr[checkingRow][column][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[checkingRow][column][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            row                                 =checkingRow;
                        }else{
                            break;
                        }
                    } 
                    
                }
            }
        }
    }
    return permittedMove;
}

function moveTheFieldINarrLeft(fieldINarr){
    let permittedMove=false;
    for (let column = 1; column <= 3; column++){
        for (let row = 0; row <= 3; row++){
            if( fieldINarr[row][column][0]!==0 ){
                for(let checkingColumn = column-1; checkingColumn >= 0; checkingColumn--){
                    console.log('now is checking ', checkingColumn, 'checkingColumn in:',row,' ',column )
                    if( fieldINarr[row][checkingColumn][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[row][checkingColumn][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        column                             =checkingColumn;
                    } else {
                        if( fieldINarr[row][checkingColumn][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[row][checkingColumn][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            column                              =checkingColumn;
                        }else{
                            break;
                        }
                    } 
                    
                }
            }
        }
    }
    return permittedMove;
}
