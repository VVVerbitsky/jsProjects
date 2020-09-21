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
    //                console.log('now is checking ', checkingRow, 'checkingRow in:',row,' ',column )
                    if( fieldINarr[checkingRow][column][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[checkingRow][column][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        row                                =checkingRow;
/////////////////////////////////////////////////////////////////////////////////////

                        fieldINarr[recordingRow][recordingColumn][1]++  
 //           //
/////////////////////////////////////////////////////////////////////////////////////
                    } else {
                        if( fieldINarr[checkingRow][column][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[checkingRow][column][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            row                                 =checkingRow;
                            /////////////////////////////////////////////////
                            addedElements.push([checkingRow, column])
/////////////////////////////////////////////////////////////////////////////////////
               
                            fieldINarr[recordingRow][recordingColumn][1]++  
                     //             //
/////////////////////////////////////////////////////////////////////////////////////
                        }else{
                            break;
                        }
                    } 
                    
                }
            }
        }
    }
    // console.log(addedElements)
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
         //           console.log('now is checking ', checkingColumn, 'checkingColumn in:',row,' ',column )
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
                                                        /////////////////////////////////////////////////
                            addedElements.push([row, checkingColumn])
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
        //            console.log('now is checking ', checkingRow, 'checkingRow in:',row,' ',column )
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
                            /////////////////////////////////////////////////
                            addedElements.push([checkingRow, column])
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
      //              console.log('now is checking ', checkingColumn, 'checkingColumn in:',row,' ',column )
                    if( fieldINarr[row][checkingColumn][0]===0 ){
                        permittedMove                      =true;
                        fieldINarr[row][checkingColumn][0] =fieldINarr[row][column][0];
                        fieldINarr[row][column][0]         =0;
                        column                             =checkingColumn;
/////////////////////////////////////////////////////////////////////////////////////
         
                        fieldINarr[recordingRow][recordingColumn][1]++  
         //
/////////////////////////////////////////////////////////////////////////////////////
                    } else {
                        if( fieldINarr[row][checkingColumn][0]===fieldINarr[row][column][0] ){
                            permittedMove                       =true;
                            fieldINarr[row][checkingColumn][0] *=2;
                            fieldINarr[row][column][0]          =0;
                            column                              =checkingColumn;
                            addedElements.push([row, checkingColumn])
/////////////////////////////////////////////////////////////////////////////////////
                
                        fieldINarr[recordingRow][recordingColumn][1]++  
                //
/////////////////////////////////////////////////////////////////////////////////////
                        }else{
                            break;
                        }
                    } 
                    
                }
            }
        }
    }
//    console.log(fieldINarr.slice())
    return permittedMove;
}