!function (){
    var KEY = {
        'left' : 37,
        'up' : 38,
        'right' : 39,
        'down' : 40
    };
    let score=0;
    let onlyOnePressButtonPerMove;
    // let onlyOnePressButtonPerMove=0;
    // let a=1;
    let justOneAppleHere=true;
    let appleLocation=[0,0];
    // let appleCheck=false;
    let sizeX=sizeY=20;
    let direction = [
        [0,1], //right
        [1,0], //down
        [0,-1], //left
        [-1,0]]; //up
    // console.log('ddd');
    direct=direction[0];
    function drawField(sizeX, sizeY){
        for(let x=0;x<sizeX;x++){
            let divX=document.createElement('div');
            divX.className='field';
            for(let y=0;y<sizeY;y++){
                let divY=document.createElement('div');
                divY.className='cell';
                divY.id=x+','+y;
                divX.appendChild(divY);
            }
            document.body.appendChild(divX);
        }
    }
    drawField(sizeX,sizeY);
    
    // let  length : 3;
    let body=[[1,1],[1,2],[1,3]];
    function drawSnake(){
        // drawApple();
        for(let i=0;i<body.length;i++){
            pixelOfSneak=document.getElementById(body[i].join());
            pixelOfSneak.className='cell snake';
        }
    }
    function move(){
        onlyOnePressButtonPerMove=true;
        let long=body.length;
        document.getElementById(body[0].join()).className='cell';
        body.push([body[long-1][0]+direct[0],body[long-1][1]+direct[1]]);
        //checkForGrowAndGrow
        // if(document.getElementById(body[body.length-1].join()).className=='cell food'){
        //     justOneAppleHere=true;
        // }else{ body.shift()}
        // console.log(body);
        let tail=body.shift();
        if(body[long-1][0]>=sizeX){
            body[long-1][0]=0;     
        }else{
            if(body[long-1][0]<0) body[long-1][0]=sizeX-1}
        if(body[long-1][1]>=sizeY){
            body[long-1][1]=0;
        }else{
            if(body[long-1][1]<0) body[long-1][1]=sizeY-1}
        // if(a!=0){
            // console.log(body.length+':::'+long);
        //     a++;
        // }
        if(document.getElementById(body[long-1].join()).className=='cell snake'){
            // console.log('meeting');
            console.log('you lose, your score:'+score);
            for(let i=0;i<body.length;i++){
                // console.log(body.length+'^^^'+body[i]);

                document.getElementById(body[i].join()).className='cell';
            }
            direct=direction[0];
            body=[[1,1],[1,2],[1,3]];
            long=3;
            score=0;
        }
        // console.log(document.getElementById(body[long-1].join()).className);

        if(document.getElementById(body[long-1].join()).className=='cell food'){
            justOneAppleHere=true;
            body.unshift(tail);
            score++;
            
        }
        document.getElementById('score').innerHTML='Your score: '+score;
        drawApple();
        drawSnake();
    }
document.body.addEventListener('keydown',turning);
function turning(event){
    if(onlyOnePressButtonPerMove){
            switch (event.keyCode) {
                case KEY.left: //стрелка влево
                    if(direct!=direction[0]){
                    direct=direction[2];
                    onlyOnePressButtonPerMove=false;
                    break;}
                case KEY.right: //стрелка вправо
                    if(direct!=direction[2]){
                    direct=direction[0];
                    onlyOnePressButtonPerMove=false;
                    break;}
                case KEY.up: //стрелка вверх
                    if(direct!=direction[1]){
                    direct=direction[3];
                    onlyOnePressButtonPerMove=false;
                    break;}
                case KEY.down: //стрелка вниз
                    if(direct!=direction[3]){
                    direct=direction[1];
                    onlyOnePressButtonPerMove=false;
                    break;}
                default :
                    return;
            }
        }
    }
    function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    function drawApple(){
        if(justOneAppleHere==true){
            // let appleTester=0;
            let appleCheck=true;
            // let a=0;
            do{
                appleLocation[0]=getRandomInt(0,sizeX-1);
                appleLocation[1]=getRandomInt(0,sizeY-1);
                for(let i=0;i<body.length;i++){
                    if(appleLocation[0]==body[i][0]&&appleLocation[1]==body[i][1]){
                        // console.log('sdasdsa');
                        appleCheck=false;
                        break;
                    }else{
                        // console.log(appleLocation+'==='+body[i])
                        appleCheck=true}
                }
            }
            while(appleCheck==false);
            // console.log(appleLocation);
            document.getElementById(appleLocation.join()).className='cell food';
            justOneAppleHere=false;
            //change for true after snake grows!
        }
    }
    // function testdrawApple(){
    //     do{
    //         appleLocation[0]=getRandomInt(0,sizeX-1);
    //         appleLocation[1]=getRandomInt(0,sizeY-1);
    //         for(let i=0;i<body.length;i++){
    //             if(appleLocation!=body[i]){
    //                 appleCheck=false;
    //             }
    //         }
    //     }
    //     while(appleCheck==true);
    //     document.getElementById(appleLocation.join()).className='cell food';
    //     justOneAppleHere=false;
    // }
    
    // testdrawApple();
// snake.move();
// drawApple();
let timerId=setInterval(move,100);
// document.body.addEventListener('click',move);
// console.log(body);
// body.push([body[body.length-1][0]+direct[0],body[body.length-1][1]+direct[1]]);
// console.log(body);



}()