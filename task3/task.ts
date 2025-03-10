interface Task {
    id: number;
    title: string;
    state: string;
    startDate: string;
    endDate: string;
}

class ToDoList {
    tasks: Task[] = [];

    constructor() {
        this.loadTasks();
        this.displayTasks();
    }

    addTaskFromForm(): void {
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const state = (document.getElementById('state') as HTMLInputElement).value;
        const startDate = (document.getElementById('startDate') as HTMLInputElement).value;
        const endDate = (document.getElementById('endDate') as HTMLInputElement).value;

        const newTask: Task = {
            id: this.tasks.length + 1,
            title: title,
            state: state,
            startDate: startDate,
            endDate: endDate
        };
        this.tasks.push(newTask);
        this.saveTasks();
        this.displayTasks();
    }

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



    displayTasks(): void {
        const taskListDiv = document.getElementById('taskList');
        if (taskListDiv) { // This check ensures taskListDiv is not null
            taskListDiv.innerHTML = ''; // Clear previous tasks
            this.tasks.forEach(task => {
                // Create card container
                const cardDiv = document.createElement('div');
                cardDiv.className = 'card mt-3';

                // Create card body
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                // Create card title
                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = `${task.title}`;

                // Create card text
                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = `ID: ${task.id} - State: ${task.state} - Start: ${task.startDate} - End: ${task.endDate}`;

                // Append title and text to card body
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);

                // Append card body to card container
                cardDiv.appendChild(cardBody);

                // Append the card to the task list container
                taskListDiv.appendChild(cardDiv);
            });
        } else {
            console.error('Task list element not found!');
        }
    }


    saveTasks(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    loadTasks(): void {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }
}

const toDoList = new ToDoList();