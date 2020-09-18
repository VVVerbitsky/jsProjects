"use strict"
!function () {

    drawField();

    !function drawStartField(){
        addRandomFilledCellTOfieldINarray();
        addRandomFilledCellTOfieldINarray();
        addFilledCellsFromArrayToHTML(fieldINarray);
        fillingFieldWithArray(fieldINarray);
    }()
}()