document.addEventListener('keydown', function(arrowKey) {
    moveTo(arrowKey, fieldINarray)
});

function moveTo(arrowKey, fieldINarr){
    switch (arrowKey.keyCode) {
        case 37:
            // filledCell.style.marginLeft = +filledCell.style.marginLeft.split('px')[0] - 110 + 'px';
            console.log('left');
            break;
        case 38:
                moveTheFieldINarrUp(fieldINarr)
            // filledCell.style.marginTop = +filledCell.style.marginTop.split('px')[0] - 110 + 'px';
            console.log('up');
            break;
        case 39:
            // filledCell.style.marginLeft = +filledCell.style.marginLeft.split('px')[0] + 110 + 'px';
            console.log('right');
            break;
        case 40:
                moveTheFieldINarrDown(fieldINarr)
            // filledCell.style.marginTop = +filledCell.style.marginTop.split('px')[0] + 110 + 'px';
            // moveDown();
            console.log('down');
            break;
    }
}
function moveTheFieldINarrDown(fieldINarr){
    for (let row = 2; row>=0; row--){
        // console.log('come in ',row,' row')
        for (let column = 0; column<=3; column++){
            // let emptySpaceBetweenEcvNumbers=true;
            // console.log('come in ',column,' column')
            for(let checkingRow=row+1; checkingRow<=3;checkingRow++){
                console.log('now is checking ', checkingRow, 'checkingRow in:',row,' ',column )
                // console.log(fieldINarr[checkingRow][column][0],' its fieldINarr[checkingRow][column]')
                // console.log(fieldINarr[row][column][0],' its fieldINarr[row][column]')

                // if(  (fieldINarr[checkingRow][column][0]===0  ||  fieldINarr[checkingRow][column][1]!==0  )  &&  fieldINarr[row][column][0]!==0){
                //     fieldINarr[row][column][1]++;
                //     fieldINarr[row][column][1]+=fieldINarr[checkingRow][column][1];
                // }
                if(fieldINarr[row][column][0]!==0){
                    if(fieldINarr[checkingRow][column][0]===0){
                        fieldINarr[row][column][1]++;
                        console.log(fieldINarr[row][column][1], ' fieldINarr[row][column][1]')
                    } else {
                        if(fieldINarr[checkingRow][column][1]!==0){
                            console.log(fieldINarr[checkingRow][column][1], ' fieldINarr[checkingRow][column][1]')
                            console.log(fieldINarr[row][column][1], ' fieldINarr[row][column][1]')
                            fieldINarr[row][column][1]=fieldINarr[checkingRow][column][1];
                            console.log(fieldINarr[row][column][1], ' fieldINarr[row][column][1]')
                        }
                        checkingRow=4; //leaving 'for' cause objects thats are under this objects has already moved
                    }
                
                }
            }
        }
    }
    console.log(fieldINarr)
}
function moveTheFieldINarrUp(fieldINarr){
    for (let row = 1; row<=3; row++){
        console.log('come in ',row,' row')
        for (let column = 0; column<=3; column++){
            // let emptySpaceBetweenEcvNumbers=true;
            console.log('come in ',column,' column')
            for(let checkingRow=row-1; checkingRow>=0;checkingRow--){
                console.log('now is checking ', checkingRow, 'checkingRow')
                // console.log(fieldINarr[checkingRow][column][0],' its fieldINarr[checkingRow][column]')
                // console.log(fieldINarr[row][column][0],' its fieldINarr[row][column]')

                if(  (fieldINarr[checkingRow][column][0]===0  ||  fieldINarr[checkingRow][column][1]!==0  )  &&  fieldINarr[row][column][0]!==0){
                    fieldINarr[row][column][1]++;
                    fieldINarr[row][column][1]+=fieldINarr[checkingRow][column][1];
                }
            }
        }
    }
    console.log(fieldINarr)
}




// if(fieldINarr[row][column][0]!==0){
//     if(fieldINarr[checkingRow][column][0]===0){
//         fieldINarr[row][column][1]++;
//     }
//     if(fieldINarr[checkingRow][column][1]!==0){
//         fieldINarr[row][column][1]+=fieldINarr[checkingRow][column][1];
//     }

// }