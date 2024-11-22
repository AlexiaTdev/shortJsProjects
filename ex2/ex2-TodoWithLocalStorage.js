//default list of todos
let todos = [{id:0, task:'coder', checked: true}, {id:1, task:'lire', checked: false}];

//boolean to filter checked or unchecked todos
let filterCheckedTasks = false;

if(!localStorage.getItem('todoList')){
    localStorage.setItem('todoList', JSON.stringify(todos))
}else{
    todos = JSON.parse(localStorage.getItem('todoList'));
}
let lastId=todos[todos.length - 1].id;

function updateListOfTodos() {
    var currentParent = document.getElementById('listoftodos');
    while(currentParent.firstChild){
        currentParent.removeChild(currentParent.lastChild)
    }


    todos.map((todo)=>{
        var liTodos= document.createElement("li");
        liTodos.id=todo.id;
        liTodos.style= filterCheckedTasks && todo.checked? 'display:none;': '';

        
        var spanTodos= document.createElement("span");
        spanTodos.textContent=todo.task;
        spanTodos.style= todo.checked? 'text-decoration-line: line-through;' : '';
        spanTodos.onclick=function(){
            let changeTodo = todos.map((task)=>{return (task.id==todo.id)? {...task, checked: !todo.checked} : task})
            todos = changeTodo;
        updateLocalStorage(changeTodo);
        updateListOfTodos();
        };
        
        var btnDelete = document.createElement('button');
        btnDelete.textContent='🗑️';
        btnDelete.onclick=function(){
            let newTodo = todos.filter((task)=>task.id!=todo.id);
            todos = newTodo;
            updateLocalStorage(newTodo);
            updateListOfTodos();
        };
        
        document.getElementById('listoftodos').appendChild(liTodos);
        document.getElementById(todo.id).appendChild(spanTodos);
        document.getElementById(todo.id).appendChild(btnDelete);
    })



}

function addTask() {
    // get input value
    let taskText = document.getElementById('task').value;

    // create new task and add to todo
    todos.push({
        id: lastId+1,
        task: taskText,
        checked: false
    })
    lastId+=1;
    console.log('added to todos', taskText);
        
    // store in localStorage
    updateLocalStorage(todos);
    
    // update list in DOM
    updateListOfTodos();
    
    // reset input
    document.getElementById('task').value = "";
}

function updateLocalStorage(todosTaskList){
    localStorage.setItem('todoList', JSON.stringify(todosTaskList))
}

function toggleCheckedTasks(){
    filterCheckedTasks = !filterCheckedTasks;
    updateListOfTodos();
}



// initiate list of todos from default todos
updateListOfTodos()