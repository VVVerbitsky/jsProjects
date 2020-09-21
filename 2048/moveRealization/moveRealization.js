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





