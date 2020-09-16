function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomInnerNumber() {
    let cellContent = getRandomInt(2, 4) < 4 ? 2 : 4;
    return cellContent
}