function drawField() { //x-row, y-column
    for (let x = 0; x < 4; x++) {
        const divX = document.createElement('div');
        divX.className = 'line';
        for (let y = 0; y < 4; y++) {
            const divY = document.createElement('div');
            divY.className = 'cell';
            divY.id = x + '-' + y;
            divX.appendChild(divY);
        }
        document.getElementById('field').appendChild(divX);
    }
}

function fillingFieldWithArray(fieldINarray) {
    clearField();
    addFilledCellsFromArrayToHTML(fieldINarray);

}
 function clearField(){
     const cells=document.getElementsByClassName('cell');
     for(let index in cells ){
         cells[index].innerHTML='';
     }
 }

 function addAppearAnimation(filledCell, addedElements, row, column){
    for(let coords of addedElements){
        console.log('in for')
        console.log(row,':',column,':::',coords[0],':',coords[1])
        if(coords[0]===row&&coords[1]===column){
            console.log('add anim name')
            filledCell.style.animationName='appear'
        }
    }
 }
 function addFilledCellsFromArrayToHTML(fieldINarray){
    console.log(addedElements)
    for (let row = 0; row < 4; row++) {
        for (let column = 0; column < 4; column++) {
            console.log(row,':',column,':')
            const cellsInnerNumberINarray = fieldINarray[row][column][0];
            if (cellsInnerNumberINarray != 0) {
                console.log(row,':',column,':::')
                const cell = document.getElementById(row + '-' + column);
                const filledCell = document.createElement('div');
                filledCell.className = 'filled';
                console.log('out of for')
                filledCell.style.backgroundColor = colorsLibrary[cellsInnerNumberINarray][0];
                filledCell.style.color = colorsLibrary[cellsInnerNumberINarray][1];
                filledCell.innerHTML = cellsInnerNumberINarray;
                cell.innerHTML = '';
                cell.appendChild(filledCell); 
                addAppearAnimation(filledCell, addedElements, row, column)
            } 
           
        }
    }
    addedElements=[]
}
