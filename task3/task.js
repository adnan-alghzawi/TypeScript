var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.tasks = [];
        this.loadTasks();
        this.displayTasks();
    }
    ToDoList.prototype.addTaskFromForm = function () {
        var title = document.getElementById('title').value;
        var state = document.getElementById('state').value;
        var startDate = document.getElementById('startDate').value;
        var endDate = document.getElementById('endDate').value;
        var newTask = {
            id: this.tasks.length + 1,
            title: title,
            state: state,
            startDate: startDate,
            endDate: endDate
        };
        this.tasks.push(newTask);
        this.saveTasks();
        this.displayTasks();
    };
    // displayTasks(): void {
    //     const taskListDiv = document.getElementById('taskList');
    //     if (taskListDiv) { // This check ensures taskListDiv is not null
    //         taskListDiv.innerHTML = ''; // Clear previous tasks
    //         this.tasks.forEach(task => {
    //             const taskDiv = document.createElement('div');
    //             taskDiv.textContent = ${task.id}: ${task.title} - ${task.state} - Start: ${task.startDate} - End: ${task.endDate};
    //             taskListDiv.appendChild(taskDiv);
    //         });
    //     } else {
    //         console.error('Task list element not found!');
    //     }
    // }
    ToDoList.prototype.displayTasks = function () {
        var taskListDiv = document.getElementById('taskList');
        if (taskListDiv) { // This check ensures taskListDiv is not null
            taskListDiv.innerHTML = ''; // Clear previous tasks
            this.tasks.forEach(function (task) {
                // Create card container
                var cardDiv = document.createElement('div');
                cardDiv.className = 'card mt-3';
                // Create card body
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                // Create card title
                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = "".concat(task.title);
                // Create card text
                var cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = "ID: ".concat(task.id, " - State: ").concat(task.state, " - Start: ").concat(task.startDate, " - End: ").concat(task.endDate);
                // Append title and text to card body
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                // Append card body to card container
                cardDiv.appendChild(cardBody);
                // Append the card to the task list container
                taskListDiv.appendChild(cardDiv);
            });
        }
        else {
            console.error('Task list element not found!');
        }
    };
    ToDoList.prototype.saveTasks = function () {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    };
    ToDoList.prototype.loadTasks = function () {
        var tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    };
    return ToDoList;
}());
var toDoList = new ToDoList();
