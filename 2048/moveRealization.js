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
    document.removeEventListener('keydown', function(arrowKey) {
        moveTo(arrowKey, fieldINarray)
    });
    console.log(fieldINarr);
    if( moveTheFieldINarrDown(fieldINarr) ){
        transportBlocksDown(fieldINarr);
        setTimeout(()=>{
            console.log('pause')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
            console.log(fieldINarr);
            // document.addEventListener('keydown', function(arrowKey) {
            //     moveTo(arrowKey, fieldINarray);
            // });
        }, 150)
    }
}
function transportBlocksDown(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
                console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
                console.log(filledCell.style.marginTop)
                filledCell.style.marginTop=filledCell.style.marginTop.split('px')[0] + 110*fieldINarr[row][column][1] + 'px';
                console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}

function moveUp(fieldINarr){
    document.removeEventListener('keydown', function(arrowKey) {
        moveTo(arrowKey, fieldINarray)
    });
    console.log(fieldINarr);
    if( moveTheFieldINarrUp(fieldINarr) ){
        transportBlocksUp(fieldINarr);
        setTimeout(()=>{
            console.log('pause')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
            console.log(fieldINarr);
            document.addEventListener('keydown', function(arrowKey) {
                moveTo(arrowKey, fieldINarray);
            });
        }, 150)
    }
}
function transportBlocksUp(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
                console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
                console.log(filledCell.style.marginTop)
                filledCell.style.marginTop=filledCell.style.marginTop.split('px')[0] - 110*fieldINarr[row][column][1] + 'px';
                console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}

function moveLeft(fieldINarr){
    document.removeEventListener('keydown', function(arrowKey) {
        moveTo(arrowKey, fieldINarray)
    });
    console.log(fieldINarr);
    if( moveTheFieldINarrLeft(fieldINarr) ){
        transportBlocksLeft(fieldINarr);
        setTimeout(()=>{
            console.log('pause--left')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
            console.log(fieldINarr);
            document.addEventListener('keydown', function(arrowKey) {
                moveTo(arrowKey, fieldINarray);
            });
        }, 150)
    }
}
function transportBlocksLeft(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
                console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
                console.log(filledCell.style.marginTop)
                filledCell.style.marginLeft=filledCell.style.marginLeft.split('px')[0] - 110*fieldINarr[row][column][1] + 'px';
                console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}

function moveRight(fieldINarr){
    document.removeEventListener('keydown', function(arrowKey) {
        moveTo(arrowKey, fieldINarray)
    });
    console.log(fieldINarr);
    if( moveTheFieldINarrRight(fieldINarr) ){
        transportBlocksRight(fieldINarr);
        setTimeout(()=>{
            console.log('pause')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
            console.log(fieldINarr);
            document.addEventListener('keydown', function(arrowKey) {
                moveTo(arrowKey, fieldINarray);
            });
        }, 150)
    }
}
function transportBlocksRight(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
                console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
                console.log(filledCell.style.marginTop)
                filledCell.style.marginLeft=filledCell.style.marginLeft.split('px')[0] + 110*fieldINarr[row][column][1] + 'px';
                console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}


function moveTheFieldINarrDown(fieldINarr){
    let permittedMove=false;
    for (let column = 0; column <= 3; column++){
//////////////////////////////////////////////////////////////////
    let recordingColumn=3;                                      //
    let recordingRow=3;                                         //
//////////////////////////////////////////////////////////////////
        for (let row = 2; row >= 0; row--){
            //////////////////////////////////////////////////////////
            if(recordingRow>row){                                   //        
                recordingColumn=column;                             //                  
                recordingRow=row;                                   //                    
            }                                                       //                                           
//////////////////////////////////////////////////////////////////////
            if( fieldINarr[row][column][0]!==0 ){
                for(let checkingRow = row+1; checkingRow <= 3; checkingRow++){
                    console.log('now is checking ', checkingRow, 'checkingRow in:',row,' ',column )
                    if( fieldINarr[checkingRow][column][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[checkingRow][column][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        row                                =checkingRow;
/////////////////////////////////////////////////////////////////////////////////////
                        console.log('/////////////////////////////////////////////')
                        console.log(recordingRow,'+',recordingColumn)
                        console.log(fieldINarr[recordingRow][recordingColumn])
                        fieldINarr[recordingRow][recordingColumn][1]++  
                        console.log(fieldINarr[recordingRow][recordingColumn])
                        console.log('wtf')
                        console.log(fieldINarr.slice())  
                        console.log('should be++')        
                        console.log('/////////////////////////////////////////////') //           //
/////////////////////////////////////////////////////////////////////////////////////
                    } else {
                        if( fieldINarr[checkingRow][column][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[checkingRow][column][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            row                                 =checkingRow;
/////////////////////////////////////////////////////////////////////////////////////
                            console.log('/////////////////////////////////////////////')
                            console.log(recordingRow,'+',recordingColumn)
                            console.log(fieldINarr[recordingRow][recordingColumn])
                            fieldINarr[recordingRow][recordingColumn][1]++  
                            console.log(fieldINarr[recordingRow][recordingColumn])
                            console.log('wtf')
                            console.log(fieldINarr)  
                            console.log('should be++')        
                            console.log('/////////////////////////////////////////////') //             //
/////////////////////////////////////////////////////////////////////////////////////
                        }else{
                            break;
                        }
                    } 
                    
                }
            }
        }
    }
    console.log(fieldINarr)
    return permittedMove;
}

function moveTheFieldINarrRight(fieldINarr){
    let permittedMove=false;
    for (let row = 0; row <= 3; row++){
//////////////////////////////////////////////////////////////////
    let recordingColumn=3;                                      //
    let recordingRow=3;                                         //
//////////////////////////////////////////////////////////////////
        for (let column = 2; column >= 0; column--){
//////////////////////////////////////////////////////////////////////
            if(recordingColumn>column){                                   //        
                recordingColumn=column;                             //                  
                recordingRow=row;                                   //                    
            }                                                       //                                           
//////////////////////////////////////////////////////////////////////
            if( fieldINarr[row][column][0]!==0 ){
                for(let checkingColumn = column+1; checkingColumn <= 3; checkingColumn++){
                    console.log('now is checking ', checkingColumn, 'checkingColumn in:',row,' ',column )
                    if( fieldINarr[row][checkingColumn][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[row][checkingColumn][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        column                             =checkingColumn;
/////////////////////////////////////////////////////////////////////////////////////
                        fieldINarr[recordingRow][recordingColumn][1]++             //
/////////////////////////////////////////////////////////////////////////////////////
                    } else {
                        if( fieldINarr[row][checkingColumn][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[row][checkingColumn][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            column                              =checkingColumn;
/////////////////////////////////////////////////////////////////////////////////////
                        fieldINarr[recordingRow][recordingColumn][1]++             //
/////////////////////////////////////////////////////////////////////////////////////
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
    for (let column = 0; column <= 3; column++){
//////////////////////////////////////////////////////////////////
    let recordingColumn=0;                                      //
    let recordingRow=0;                                         //
//////////////////////////////////////////////////////////////////
        for (let row = 1; row <= 3; row++){
//////////////////////////////////////////////////////////////////////
            if(recordingRow<row){                                   //        
                recordingColumn=column;                             //                  
                recordingRow=row;                                   //                    
            }                                                       //                                           
//////////////////////////////////////////////////////////////////////
            if( fieldINarr[row][column][0]!==0 ){
                for(let checkingRow = row-1; checkingRow >= 0;checkingRow--){
                    console.log('now is checking ', checkingRow, 'checkingRow in:',row,' ',column )
                    if( fieldINarr[checkingRow][column][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[checkingRow][column][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        row                                =checkingRow;
/////////////////////////////////////////////////////////////////////////////////////
                        fieldINarr[recordingRow][recordingColumn][1]++             //
/////////////////////////////////////////////////////////////////////////////////////
                    } else {
                        if( fieldINarr[checkingRow][column][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[checkingRow][column][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            row                                 =checkingRow;
/////////////////////////////////////////////////////////////////////////////////////
                        fieldINarr[recordingRow][recordingColumn][1]++             //
/////////////////////////////////////////////////////////////////////////////////////
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
    for (let row = 0; row <= 3; row++){
//////////////////////////////////////////////////////////////////
    let recordingColumn=0;                                      //
    let recordingRow=0;                                         //
//////////////////////////////////////////////////////////////////
        for (let column = 1; column <= 3; column++){
//////////////////////////////////////////////////////////////////////
            if(recordingColumn<column){                                   //        
                recordingColumn=column;                             //                  
                recordingRow=row;                                   //                    
            }                                                       //                                           
//////////////////////////////////////////////////////////////////////
            if( fieldINarr[row][column][0]!==0 ){
                for(let checkingColumn = column-1; checkingColumn >= 0; checkingColumn--){
                    console.log('now is checking ', checkingColumn, 'checkingColumn in:',row,' ',column )
                    if( fieldINarr[row][checkingColumn][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[row][checkingColumn][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        column                             =checkingColumn;
/////////////////////////////////////////////////////////////////////////////////////
                        console.log('/////////////////////////////////////////////')
                        console.log(recordingRow,'+',recordingColumn)
                        console.log(fieldINarr[recordingRow][recordingColumn])
                        fieldINarr[recordingRow][recordingColumn][1]++  
                        console.log(fieldINarr[recordingRow][recordingColumn])
                        console.log('wtf')
                        console.log(fieldINarr)  
                        console.log('should be++')        
                        console.log('/////////////////////////////////////////////') //
/////////////////////////////////////////////////////////////////////////////////////
                    } else {
                        if( fieldINarr[row][checkingColumn][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[row][checkingColumn][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            column                              =checkingColumn;
/////////////////////////////////////////////////////////////////////////////////////
                        console.log('/////////////////////////////////////////////')
                        console.log(recordingRow,'+',recordingColumn)
                        console.log(fieldINarr[recordingRow][recordingColumn])
                        fieldINarr[recordingRow][recordingColumn][1]++  
                        console.log(fieldINarr[recordingRow][recordingColumn])
                        console.log('wtf')
                        console.log(fieldINarr)  
                        console.log('should be++')        
                        console.log('/////////////////////////////////////////////') //
/////////////////////////////////////////////////////////////////////////////////////
                        }else{
                            break;
                        }
                    } 
                    
                }
            }
        }
    }
    console.log(fieldINarr.slice())
    return permittedMove;
}
