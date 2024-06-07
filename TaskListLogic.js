import { createProduct, updateProduct, deleteProduct } from "./service.js";


async function createNewTask(taskName, itemList) {
    const li = document.createElement('li');
    li.classList.add('list-item', 'd-flex', 'justify-content-between', 'align-items-center', 'px-2', 'py-1', 'rounded', 'mb-2', 'fw-bold');
    li.textContent = taskName;
    const btn = document.createElement('button');
    btn.classList.add('text-danger', 'removeBtn', 'fs-5');
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fa-solid', 'fa-xmark');
    btn.appendChild(removeIcon);
    li.appendChild(btn);
    itemList.appendChild(li);

    const data = {
        "name": taskName,
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    };
    const response = await createProduct(data);
    console.log(response);
    li.id = response.id
}

function addTaskToUI(taskName, taskId, itemList) {
    const li = document.createElement('li');
    li.id = taskId;
    li.classList.add('list-item', 'd-flex', 'justify-content-between', 'align-items-center', 'px-2', 'py-1', 'rounded', 'mb-2', 'fw-bold');
    li.textContent = taskName
    const btn = document.createElement('button');
    btn.classList.add('text-danger', 'removeBtn', 'fs-5');
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fa-solid', 'fa-xmark');
    btn.appendChild(removeIcon);
    li.appendChild(btn);
    itemList.appendChild(li);

}

function removeTask(ele) {
    if (ele.classList.contains('removeBtn')) {
        ele.parentElement.remove();
        deleteProduct(ele.parentElement.id);
    }
}

function clearTasks(listItems) {
    listItems.forEach((item) => {
        deleteProduct(item.id)
        item.remove();
    });
}

function editTask(taskId, taskName) {
    const data = {
        "name": taskName,
    };

    updateProduct(taskId, data);
}

export { createNewTask, removeTask, clearTasks, addTaskToUI, editTask  };