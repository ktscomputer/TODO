document.addEventListener("DOMContentLoaded",()=> {
    const addButton = document.getElementById("add-btn");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const deleteSound = document.getElementById("delete-sound") // playing delete audio
  
    let itemToEdit = null;
    let itemToDelete = null;
  
    // Load tasks from local storage
    function loadTodos() {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      todos.forEach(todo => {
        const li = createTodoItem(todo.text,todo.isCompleted);
        todoList.appendChild(li);
      });
    }
  
    // Save tasks to local storage
    function saveTodos() {
      const todos = [];
      todoList.querySelectorAll('li').forEach(li => {
        const taskText = li.querySelector(".task-text").textContent;
        const isCompleted = li.querySelector('.task-completed').cheked
        todos.push({ text: taskText,isCompleted });
      });
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
    // Function to create a new todo item
    function createTodoItem(text,isCompleted=false) {
      const li = document.createElement("li");
      li.innerHTML = `
      <input type = "checkbox" class="task-completed" ${isCompleted ? "checked": " "}>
        <span class='task-text'>${text}</span>
        <div class='task-actions'>
          <button class='edit-btn'><i class='fas fa-edit'></i></button>
          <button class='delete-btn'><i class='fas fa-trash-alt'></i></button>
        </div>
      `;
      const checkbox = li.querySelector('.task-completed')
      checkbox.addEventListener('change',()=>{
        saveTodos();
      })
      const editButton = li.querySelector('.edit-btn');
      editButton.addEventListener('click', () => {
        itemToEdit = li;
        editTodo();
      });
  
      const deleteButton = li.querySelector('.delete-btn');
      deleteButton.addEventListener('click', () => {
        itemToDelete = li;
        deleteTodo();
      });
  
      return li;
    }
  
    // Function to add a new task
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText === "") {
        alert("Task cannot be empty");
        return;
      }
  
      // Check for duplicate tasks
      const existingTasks = todoList.querySelectorAll('.task-text');
      for (const task of existingTasks) {
        if (task.textContent === todoText) {
          alert("Task already exists");
          return;
        }
      }
  
      const li = createTodoItem(todoText);
      todoList.appendChild(li);
      todoInput.value = "";
  
      saveTodos(); // Save to local storage after adding
    }
  
    // Function to edit a task
    function editTodo() {
      if (itemToEdit) {
        const taskText = itemToEdit.querySelector(".task-text");
        const currentText = taskText.textContent;
        const updatedText = prompt("Edit task:", currentText);
  
        if (updatedText !== null && updatedText.trim() !== "") {
          taskText.textContent = updatedText.trim();
          saveTodos(); // Save to local storage after editing
        } else if (updatedText === null) {
          alert("No changes made");
        } else {
          alert("Task cannot be empty");
        }
  
        itemToEdit = null; // Reset the reference
      }
    }
  
    // Function to delete a task with confirmation
    function deleteTodo() {
      if (itemToDelete) {
        const confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
          todoList.removeChild(itemToDelete);
          deleteSound.play()
          saveTodos(); // Save to local storage after deleting
        }
        itemToDelete = null; // Reset the reference
      }
    }
  
    // Event listeners for adding tasks
    addButton.addEventListener("click", addTodo);
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTodo();
      }
    });
  
    // Load tasks from local storage when the page loads
    loadTodos();
  });
  