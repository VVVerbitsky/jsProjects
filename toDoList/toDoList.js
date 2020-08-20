!function(){
    let toDoPull=document.getElementsByClassName('toDoPull')[0];
    let completedPull=document.getElementsByClassName('completedPull')[0];
    let textarea=document.getElementsByTagName('textarea')[0];
    let addButton=document.getElementsByClassName('add')[0];
    addButton.addEventListener('click', ()=>{createTask(toDoPull,completedPull,textarea.value)});
    console.log(completedPull);
    console.log( toDoPull);
    console.log(textarea);
    function createTask(doList,doneList,textSource){
        if(textSource!=''){
        let elem=document.createElement('div');
        elem.className='toDoElem';
        let input=document.createElement('input');
        input.type='checkbox';
        input.addEventListener('click',()=>{
            if(input.checked==true){
                elem.className='toDoElem completed';
                doneList.appendChild(elem);
        }else{doList.appendChild(elem);
              elem.className='toDoElem';
        }});
        elem.appendChild(input);
        let p=document.createElement('p');
        p.innerHTML=textSource;
        elem.appendChild(p);
        let deleteButton=document.createElement('div');
        deleteButton.className='delete';
        deleteButton.innerHTML='delete';
        elem.appendChild(deleteButton);
        // doList.appendChild(elem);
        doList.insertBefore(elem,doList.firstChild);
        deleteButton.addEventListener('click',()=>{elem.remove()});
        textarea.value='';
        } else{ alert('too easy task for you')}
    }
}();