import { createNewTask, removeTask, clearTasks } from "./TaskListLogic.js";

const itemInput = document.getElementById('form-input');
const itemList = document.querySelector('.itemList');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');

function addNewTask(e) { 
    e.preventDefault();
    checkUI();
    createNewTask(itemInput.value,itemList);
    itemInput.value = '';
    checkUI();
}

function removeTaskItem(e) { 
    removeTask(e.target.parentElement);
    checkUI();
}

function clearTaskItems() { 
    const listItems = document.querySelectorAll('.list-item');
    clearTasks(listItems);
    checkUI();
}

function checkUI() { 
    if (!itemList.firstElementChild) {
        clearBtn.style.display = 'none';
    } else { 
        clearBtn.style.display = 'block';
    }  
}


addBtn.addEventListener('click', addNewTask);
itemList.addEventListener('click', removeTaskItem)
clearBtn.addEventListener('click', clearTaskItems);
