const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

const addTask = ()=>{
    if(inputBox.value ===''){
        alert('You must write something to add a task!')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        // cross-icon add at end
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = '';
    saveTasks();
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName =='LI'){
        e.target.classList.toggle('checked');
        saveTasks();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTasks();
    }
},false);


const saveTasks = ()=>{
    localStorage.setItem('data',listContainer.innerHTML);
}
const showTasks = ()=>{
    listContainer.innerHTML = localStorage.getItem('data');

}
showTasks()
