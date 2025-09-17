import { create } from "./create.js";
import { app, Home } from "./index.js";
import { Task_detail } from "./task_detail.js";
import { delete_task, edit_task, get_task_list, toggle_status } from "./tasks.js";
//console.log("tasks: "+Tasks[0]?.task, "sample tasks"+sample_tasks[0]?.task);
export function render_tasks(real_task) {
    let tasks = real_task ? real_task : get_task_list();
    return `
        ${tasks
        .map((t) => `
                <div class="task-list">
                    <span class="title">${t.task} - ${t.status}</span>
                    <button id="view" data-id="${t.id}" class="view">View</button>
                </div>
            `)
        .join("")}
    `;
}
export function todo_list() {
    app.innerHTML = `
        <div>
            <h1>Tasks</h1>
            <ul id="task-box">
            ${render_tasks()}
            </ul>
        </div>
        <p>

            <button class="nav-btn" id="nav-btn">Back</button>
            <button class="nav-btn" id="create_task_page">Create Task</button>
        </p>
    `;
    const back_btn = document.getElementById("nav-btn");
    back_btn.addEventListener("click", Home);
    const create_task_btn = document.getElementById("create_task_page");
    create_task_btn.addEventListener("click", () => { create(); });
    const toggleButtons = document.querySelectorAll(".toggleStatus");
    toggleButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            toggle_status(id, todo_list);
        });
    });
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            // edit_task(id, todo_list)
        });
    });
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            delete_task(id, todo_list);
        });
    });
    const view_btn = document.querySelectorAll(".view");
    view_btn.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            Task_detail(id);
        });
    });
}
