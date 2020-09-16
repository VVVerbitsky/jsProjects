document.addEventListener('keydown', function(arrowKey) {
    switch (arrowKey.keyCode) {
        case 37:
            // filledCell.style.marginLeft = +filledCell.style.marginLeft.split('px')[0] - 110 + 'px';
            console.log('left');
            break;
        case 38:
            // filledCell.style.marginTop = +filledCell.style.marginTop.split('px')[0] - 110 + 'px';
            console.log('up');
            break;
        case 39:
            // filledCell.style.marginLeft = +filledCell.style.marginLeft.split('px')[0] + 110 + 'px';
            console.log('right');
            break;
        case 40:
            // filledCell.style.marginTop = +filledCell.style.marginTop.split('px')[0] + 110 + 'px';
            // moveDown();
            console.log('down');
            break;
    }
});
