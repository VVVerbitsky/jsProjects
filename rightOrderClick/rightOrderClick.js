//make for es6
//unic random style for each cell

!function(){
    var size=2;
    const from=1;
    var timerId;
    var time=document.getElementById('timer');
    var rightOrderClickGame=document.getElementById('rightOrderClickGame');



    gameStart();





    function gameStart(){
        time.innerHTML=20;
        count=1;
        var to=size*size;
        rightOrderClickGame.style.width=size*66+'px';
        var game=document.getElementById('game');
        var arr=createArr(from,to);
        arr=reorderArr(arr);
        arr=arrOfArrs(size, arr);
        createGameField(game,arr,size);
        timerId=setInterval(timer,1000);
    }

    function createGameField(table,arr,size){
        for(var i=0;i<size;i++){
            var tr=document.createElement('tr');
            table.appendChild(tr);
            for(var j=0;j<size;j++){
                var td=document.createElement('td');
                tr.appendChild(td);
                td.innerHTML=arr[i][j];
                td.addEventListener('click',rightClickedTrs);
                if(arr[i][j]==size*size){
                    // td.addEventListener('click',winCheck);   //check for win per click
                }

            }
        }
    }

    function rightClickedTrs(){
            if(this.innerHTML==count){
                this.setAttribute('class', 'active');
                count++;
            }  
        }

    function winCheck(){
        if(count==(size*size+1)){
            // console.log('you win');           //
            // clearInterval(timerId);     //
            // size++;                     //check for win per click
            // clearTable(game);           //
            // gameStart();                //
            return true;
        }
        return false;
    }

    function timer(){
        time.innerHTML=(+time.innerHTML)-1;
        if(time.innerHTML==-1&&!winCheck()){
            lose();
        }
        if(winCheck()){       //
            win();            //check for win per second
        }                     //
    }

    function win(){
        clearInterval(timerId);
        size++;
        clearTable(game);
        gameStart();
        console.log('you win');
    }

    function lose(){
        clearInterval(timerId);
        clearTable(game);
        gameStart();
        alert('you lose');
    }

    function clearTable(table){
        for(var i=0;i<size;i++){
            table.innerHTML='';
        }
        var time=document.getElementById('timer');
    }

    function arrOfArrs(size, arr){
        var newArr=[];
        for(var i=0;i<size;i++){
            newArr.push(arr.splice(0,size));
        }
        return newArr;
    }

    function createArr(from,to){
        var arr=[];
        for(var i=from;i<=to;i++){
            arr.push(i);
        }
        return arr;
    }

    function reorderArr(arr){
        var reorderedArr=[];
        var length=arr.length;
        for(var i=0;i<length;i++){
            var random=getRandomInt(0,arr.length-1);
            reorderedArr.push(arr.splice(random,1)[0]);
        }
        return reorderedArr;
    }

    function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }




}();