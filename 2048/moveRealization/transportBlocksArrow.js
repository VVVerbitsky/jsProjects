function transportBlocksDown(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
                // console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
                // console.log(filledCell.style.marginTop)
                filledCell.style.marginTop=filledCell.style.marginTop.split('px')[0] + 110*fieldINarr[row][column][1] + 'px';
                // console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}


function transportBlocksUp(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
         //       console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
         //       console.log(filledCell.style.marginTop)
                filledCell.style.marginTop=filledCell.style.marginTop.split('px')[0] - 110*fieldINarr[row][column][1] + 'px';
          //      console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}


function transportBlocksLeft(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
        //        console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
        //        console.log(filledCell.style.marginTop)
                filledCell.style.marginLeft=filledCell.style.marginLeft.split('px')[0] - 110*fieldINarr[row][column][1] + 'px';
        //        console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}


function transportBlocksRight(fieldINarr){
    for (let row in fieldINarr){
        for(let column in fieldINarr){
            if(fieldINarr[row][column][1]){
        //        console.log(row,'-',column,' cell for margin');
                let filledCell=document.getElementById(row+'-'+column).firstElementChild;
       //         console.log(filledCell.style.marginTop)
                filledCell.style.marginLeft=filledCell.style.marginLeft.split('px')[0] + 110*fieldINarr[row][column][1] + 'px';
       //         console.log(filledCell.style.marginTop)
                fieldINarr[row][column][1]=0;
            }
        }
    }
}