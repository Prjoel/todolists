import getTodosFromBrowser from '/client/js/getTodosFromBrowser.js';

export default function createTodoInBrowser() {
    var addTodoInput = document.getElementById("add-todo");
    let inputValue = addTodoInput.value.trim();
    if(inputValue === '') {
        alert('Add something!')
        return 0
    }
    let todoItem = {
        "todo-content": inputValue,
        id: 1
    }
    let savedTodos = getTodosFromBrowser();
    if(savedTodos){
        todoItem.id = ( savedTodos[ savedTodos.length - 1 ].id ) + 1;
        savedTodos.push(todoItem)
        localStorage.setItem('todolist', JSON.stringify(savedTodos));
    } else {
        localStorage.setItem('todolist', JSON.stringify([todoItem]));
    }
    getTodosFromBrowser();
    addTodoInput.value = "";
    return 1;
}

// this function takes the input value (the new todo) and saves it to the browser. 