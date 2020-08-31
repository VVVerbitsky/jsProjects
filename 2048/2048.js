"use strict"
colorsLibrary={2:   'rgb(238, 228, 218)',
               4:   'rgb(237, 224, 200)',
               8:   'rgb(242, 177, 121)',
               16:  'rgb(245, 149, 99)',
               32:  'rgb(246, 124, 95)',
               64:  'rgb(246, 94, 59)',
               128: 'rgb(237, 207, 114)',
               256: 'rgb(237, 204, 97)',
               512: 'rgb(237, 200, 280)',
               1024:'rgb(237, 197, 63)',
               2048:'rgb(237, 224, 200)',             
}
!function(){
    function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    function drawField(sizeX, sizeY){
        for(let x=0;x<sizeX;x++){
            let divX=document.createElement('div');
            divX.className='line';
            for(let y=0;y<sizeY;y++){
                let divY=document.createElement('div');
                divY.className='cell';
                divY.id=x+','+y;
                divX.appendChild(divY);
            }
            document.getElementById('field').appendChild(divX);
        }
    }
    drawField(4, 4);



}()