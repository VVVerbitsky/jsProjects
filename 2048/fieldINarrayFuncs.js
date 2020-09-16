function getEmptyCellsINarray(array){
    let freeCellsINarr=[];
    for(let arr in array){
        for(let elem in array[arr]){
            if(!array[arr][elem][0]){
                freeCellsINarr.push(array[arr][elem])
            }
        }
    }
    return freeCellsINarr;
}

function addRandomFilledCellTOfieldINarray() {

        const freeCellsINarr=getEmptyCellsINarray(fieldINarray)
        const randomFreeCellIndex=getRandomInt(0, freeCellsINarr.length-1)
        const randomInnerNumber=getRandomInnerNumber();
        freeCellsINarr[randomFreeCellIndex][0]=randomInnerNumber;

        // let x = getRandomInt(0, 3);
        // let y = getRandomInt(0, 3);
        // console.log('maybe not empty random cell:', x, ':', y);
        // console.log('fieldINarray inner', fieldINarray[x][y][0]);
        // console.log('fieldINarray inner example', fieldINarray[1][0][0]);
        // if (fieldINarray[x][y][0] != 0) {
        //     [x, y] = getRandomEmptyCellCoordinations();
        //     console.log('not zero detected')
        // }
    // return [x, y]
}


