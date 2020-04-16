//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault()
    //Todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")
    //Create LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //Checkmark Button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    //Trash Button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //Append to list 
    todoList.appendChild(todoDiv)
    //Cleat to do input value
    todoInput.value = ""
}

function deleteCheck(e){
    const item = e.target
    //Delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    //Check Mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}
