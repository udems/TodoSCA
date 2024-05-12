

const taskInput = document.getElementById("taskInput");
const submit = document.getElementById("submit");
const taskList = document.getElementById("taskList");



let taskCount = 0;

submit.addEventListener('click', function(event) {
    event.preventDefault();
    const newTask = taskInput.value;
  
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }


    function addTask(task) {

        taskCount++;
        
        const listItem = document.createElement('li');
        const taskText = document.createElement('span');

        taskText.className = 'task-text';
        taskText.textContent = `Task ${taskCount}`;
        listItem.appendChild(taskText);

        listItem.textContent = task;
        taskList.appendChild(listItem);
      
        // Additional functionality to be added here

        const tickButton = document.createElement('button');
        tickButton.className = "tick" ;
        tickButton.innerHTML = '<i class="fas fa-check"></i>';
        tickButton.onclick = function () {
            listItem.classList.toggle('completed');
            taskText.classList.toggle('completed');
        };
        listItem.appendChild(tickButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        deleteButton.onclick = function () {
            listItem.remove();
        };
        listItem.appendChild(deleteButton);

        // event listeners for checkbox
        checkBox.addEventListener('change', function() {
            if (this.checked) {
                taskText.style.textDecoration = 'line-through';
            } else {
                taskText.style.textDecoration = 'none';
            }
        });

        // event listeners for delete button
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
    }

    taskInput.value = ''; // Clear the input field after adding a task

    addTask(newTask); // Add the new task

});