!function(){
    let textarea=document.getElementsByTagName('textarea')[0];
    let addButton=document.getElementsByClassName('add')[0];
    let toDoPull=document.getElementsByClassName('toDoPull')[0];
    let donePull=document.getElementsByClassName('donePull')[0];

    function createTask(doList,doneList,textSource){
        if(textSource!=''){
            textarea.value='';

            let task=document.createElement('div');
            task.className='toDoElem';

            task.appendChild(createCheckbox(task, doList, doneList));
            task.appendChild(createTaskText(textSource));
            task.appendChild(createDeleteButton(task));

            doList.insertBefore(task, doList.firstChild);

        } else{ alert('too easy task for you')}
    }

    function createCheckbox(task, doList, doneList){
        let checkbox=document.createElement('input');
            checkbox.type='checkbox';

            checkbox.addEventListener('click',()=>{
                if(!checkbox.checked){
                    doList.appendChild(task);
                    task.className='toDoElem';
                }else{
                    task.className='toDoElem done';
                    doneList.appendChild(task);
                }
            });
        return checkbox;
    }

    function createTaskText(textSource){
        let taskText=document.createElement('p');
        taskText.innerHTML=textSource;
        return taskText;
    }

    function createDeleteButton(task){
        let deleteButton=document.createElement('div');
        deleteButton.className='delete';
        deleteButton.innerHTML='delete';
        deleteButton.addEventListener('click',()=>{task.remove()});
        return deleteButton;
    }

    addButton.addEventListener('click', ()=>{createTask(toDoPull, donePull, textarea.value)});
}();