function moveDown(fieldINarr){
    // console.log(fieldINarr);
    if( moveTheFieldINarrDown(fieldINarr) ){
        document.removeEventListener('keydown', func);
        transportBlocksDown(fieldINarr);
        setTimeout(()=>{
            console.log('pause')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
            // console.log(fieldINarr);
            document.addEventListener('keydown', func);
        }, delayTime)
    }
}

function moveUp(fieldINarr){
    // console.log(fieldINarr);
    if( moveTheFieldINarrUp(fieldINarr) ){
        document.removeEventListener('keydown', func);
        transportBlocksUp(fieldINarr);
        setTimeout(()=>{
            console.log('pause')
            addRandomFilledCellTOfieldINarray();
            fillingFieldWithArray(fieldINarr);
          //  console.log(fieldINarr);
            document.addEventListener('keydown', func);
        }, delayTime)
    }
}

function moveLeft(fieldINarr){  
    //   console.log(fieldINarr);
       if( moveTheFieldINarrLeft(fieldINarr) ){
           document.removeEventListener('keydown', func);
           transportBlocksLeft(fieldINarr);
           setTimeout(()=>{
               console.log('pause--left')
               addRandomFilledCellTOfieldINarray();
               fillingFieldWithArray(fieldINarr);
          //     console.log(fieldINarr);
               document.addEventListener('keydown', func);
           }, delayTime)
       }
   }

   function moveRight(fieldINarr){  
    //  console.log(fieldINarr);
      if( moveTheFieldINarrRight(fieldINarr) ){
          document.removeEventListener('keydown', func);
          transportBlocksRight(fieldINarr);
          setTimeout(()=>{
              console.log('pause')
              addRandomFilledCellTOfieldINarray();
              fillingFieldWithArray(fieldINarr);
        //      console.log(fieldINarr);
              document.addEventListener('keydown', func);
          }, delayTime)
      }
  }