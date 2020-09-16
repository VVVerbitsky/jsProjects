function drawField(sizeX, sizeY) { //x-line, y-row
    for (let x = 0; x < sizeX; x++) {
        const divX = document.createElement('div');
        divX.className = 'line';
        for (let y = 0; y < sizeY; y++) {
            const divY = document.createElement('div');
            divY.className = 'cell';
            divY.id = x + '-' + y;
            // divY.test = x + ',' + y;
            divX.appendChild(divY);
        }
        document.getElementById('field').appendChild(divX);
    }
}

function fillingFieldWithArray(fieldINarray) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let cellsInnerNumberINarray = fieldINarray[i][j][0];
            if (cellsInnerNumberINarray != 0) {
                console.log('detected not empty cell - ', cellsInnerNumberINarray);
                const cell = document.getElementById(i + '-' + j);
                // console.log(cell.innerHTML,' cellsInner')
                const filledCell = document.createElement('div');
                filledCell.className = 'filled';
                // filledCell.style.scale=2;

                filledCell.style.backgroundColor = colorsLibrary[cellsInnerNumberINarray][0];
                filledCell.style.color = colorsLibrary[cellsInnerNumberINarray][1];
                filledCell.innerHTML = cellsInnerNumberINarray;
                cell.innerHTML = '';
                cell.appendChild(filledCell); 
            } 
        }
    }

}