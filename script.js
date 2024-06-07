import { createNewTask, removeTask, clearTasks, addTaskToUI, editTask } from "./TaskListLogic.js";
import { getProducts, updateProduct } from "./service.js";

const itemInput = document.getElementById('form-input');
const itemList = document.querySelector('.itemList');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
let isEditMode = false;

function addNewTask(e) {
    e.preventDefault();
    checkUI();

    if (isEditMode) {
        const itemToEdit = document.querySelector('.is-edit-mode');
        const itemInput = document.getElementById('form-input');
        const itemId = itemToEdit.id;
        
        editTask(itemId, itemInput.value);
        itemToEdit.innerHTML = `
                        ${itemInput.value}
                        <button class="text-danger removeBtn fs-5">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
        `;
        itemToEdit.classList.remove('is-edit-mode');
        isEditMode = false;
        addBtn.style.backgroundColor = '#fff';
        addBtn.style.color = '#0d6efd';
        addBtn.value = 'Add Item';

        itemInput.value = '';
    } else {
        createNewTask(itemInput.value, itemList);
        itemInput.value = '';
        checkUI();
    }
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

function editListItems(e) {
    isEditMode = true;
    console.log(e.target);
    if (e.target.classList.contains('list-item')) {
        itemInput.value = e.target.textContent;
        e.target.classList.add('is-edit-mode');
        addBtn.style.backgroundColor = '#228b22';
        addBtn.style.color = '#fff';
        addBtn.value = 'Update Item';


    }
}

function checkUI() {
    if (!itemList.firstElementChild) {
        clearBtn.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
    }
}

(async function () {
    const productList = await getProducts();
    productList.forEach((product) => {
        addTaskToUI(product.name, product.id, itemList);

    });
})();


addBtn.addEventListener('click', addNewTask);
itemList.addEventListener('click', removeTaskItem);
clearBtn.addEventListener('click', clearTaskItems);
itemList.addEventListener('dblclick', editListItems);
