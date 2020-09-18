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
}


