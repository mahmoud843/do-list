let addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
    let todoInput = document.getElementById("todoInput");
    if(todoInput.value !== ""){
        let todoList = document.getElementById("todoList");
        let todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.textContent = todoInput.value;
        todoList.appendChild(todoItem);
        todoInput.value = "";
        todoInput.focus();                
    }else{
        alert("Please enter a task");
    }
});