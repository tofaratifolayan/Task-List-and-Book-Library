class Task {
    constructor(task, completed){
        this.task = task;
        this.completed = completed;
    }
}

class UserInterface {
    constructor() {
        this.taskInput = document.getElementById('input');
        this.button = document.getElementById('button');
        this.tableBody = document.getElementById('table-body');

        this.tasks = [];
    }

    bindEventListeners() {
        this.button.addEventListener('click', (e) => this.onButtonClick(e));
    }

    onButtonClick(event) {
        event.preventDefault();

        const task = new Task(
            this.taskInput.value,
            false
        );

        this.tasks.push(task);
        this.populateTasksTable();

        this.taskInput.value = "";
    }

    populateTasksTable() {
        this.tableBody.innerHTML = "";

        for(const task of this.tasks) {
            const row = document.createElement('tr');
            const taskCell = document.createElement('td');
            const isCompletedCell = document.createElement('td');
            const actionsCell = document.createElement('td');

            const isCompletedButton = document.createElement('button');
            isCompletedButton.classList.add('btn btn-primary');

            taskCell.innerHTML = task.task
            if(task.completed == false){
                isCompletedCell.innerHTML = 'Not Completed';
            }
            else{
                isCompletedCell.innerHTML = 'Completed';
            }
            isCompletedButton.innerHTML = 'Complete Task';

            isCompletedButton.addEventListener('click', (e) => this.onCompleteTaskClick(task));
            actionsCell.append(isCompletedButton);

            row.append(taskCell);
            row.append(isCompletedCell);
            row.append(actionsCell);
            this.tableBody.append(row);
        }
    }

    onCompleteTaskClick(taskToComplete) {
        for(const task of this.tasks) {
            if(task.task === taskToComplete.task){
                task.completed = true;
            }
        }
        this.populateTasksTable();
    }
}

const UI = new UserInterface();
UI.bindEventListeners();