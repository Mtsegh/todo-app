import { create } from "./create.js";
import { app } from "./index.js";
import { delete_task, edit_task, findTask, Tasks, toggle_status } from "./tasks.js";
import { todo_list } from "./todo_list.js";
export function Task_detail(id) {
    let task = findTask(id);
    if (!task) {
        app.innerHTML = '<h2>Task Info</h2><h4>Error: Task not found!</h4><button class="nav-btn" id="nav-btn">Back</button>';
        const back_btn = document.getElementById("nav-btn");
        back_btn.addEventListener("click", todo_list);
        return;
    }
    app.innerHTML = `
    <div id="detail"><h2>Task Info</h2>
        <div class="task-info">
            <div class="task-label">Task: </div>
            <div class="task-value" id="1"> ${task === null || task === void 0 ? void 0 : task.task}</div>

        <div class="task-label">Status: </div><div class="task-value" id="2"> ${task === null || task === void 0 ? void 0 : task.status}</div>
        <div class="task-label">Start Time: </div><div class="task-value" id="3"> ${task === null || task === void 0 ? void 0 : task.start_time} ${task === null || task === void 0 ? void 0 : task.start_date}</div>
        <div class="task-label">Deadline: </div><div class="task-value" id="4"> ${task === null || task === void 0 ? void 0 : task.end_time} ${task === null || task === void 0 ? void 0 : task.end_date}</div></div>
        <div class="action-btn"><button class="task-btn" id="delete">Delete</button>
        <button class="task-btn" id="edit">Edit</button></div>
        <div id="toggle-btn"><button class="task-btn" id="toggleStatus">Mark as ${task.status === "Completed" ? "Pending" : "Completed"}</button></div>
        </div>
        <button class="nav-btn" id="nav-btn">Back</button>
    `;
    const back_btn = document.getElementById("nav-btn");
    back_btn.addEventListener("click", todo_list);
    const toggleButtons = document.getElementById("toggleStatus");
    toggleButtons.addEventListener("click", () => {
        toggle_status(task.id, Task_detail);
    });
    const editButtons = document.getElementById("edit");
    editButtons.addEventListener("click", () => {
        edit_task(id, create);
    });
    const deleteButtons = document.getElementById("delete");
    deleteButtons.addEventListener("click", () => {
        delete_task(id, todo_list);
    });
}
