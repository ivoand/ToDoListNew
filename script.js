const TaskList = function (container) {
    let count = 0;
    this.template = document.querySelector(".template");

    const markAsDone = function (task) {
        if (!this.classList.contains("editable")) {
            this.classList.toggle("done");
        }
    };






    this.addTask = function (text) {
        let task = this.template.cloneNode(true);
        this.template.addEventListener('click', markAsDone(task));
        task.classList.remove("template");
        task.querySelector("pre").textContent = text;
        document.querySelector(container).append(task);
    };
};

let todo = new TaskList(".task-list");



document
    .querySelector(".new-task")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let textarea = this.querySelector("textarea");
        todo.addTask(textarea.value);
        // addTask(textarea.value, false, count);
        textarea.value = "";

    });