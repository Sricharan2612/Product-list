function createNewTask(taskName, itemList) { 
    const li = document.createElement('li');
    li.classList.add('list-item','d-flex', 'justify-content-between', 'align-items-center', 'px-2', 'py-1', 'rounded', 'mb-2', 'fw-bold');
    li.textContent = taskName;
    const btn = document.createElement('button');
    btn.classList.add('text-danger', 'removeBtn', 'fs-5')
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fa-solid', 'fa-xmark');
    btn.appendChild(removeIcon);
    li.appendChild(btn);
    itemList.appendChild(li);
}

function removeTask(ele) { 
    if (ele.classList.contains('removeBtn')) { 
        ele.parentElement.remove();
    }
}

function clearTasks(listItems) { 
    listItems.forEach((item) => item.remove())
}

export {createNewTask, removeTask, clearTasks };