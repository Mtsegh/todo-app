import { app } from "./index.js";
import { Task_detail } from "./task_detail.js";
import { add_task, delete_task, edit_task, save_edited_task, Tasks, toggle_status } from "./tasks.js";
import { render_tasks, todo_list } from "./todo_list.js";
let myInfo = {
    id: 1,
    task: "",
    status: "Pending",
    start_time: '',
    start_date: "",
    end_time: "",
    end_date: ""
};
function create_html(info) {
    if (!info) {
        info = myInfo;
    }
    return `
    <p id="text-input">
        <input type="text" id="todo-input" placeholder="Add new task..."  value="${info.task}"/>
        
        </p>
        Start
        <p class="time-input">
        <input type="date" class="todo-time" id="start-date" placeholder="Add new task..." value="${info.start_date}"/>
        
        </p>
        <p class="time-input">
        <input type="time" class="todo-time" id="start-time" value="${info.start_time}"/>
        
        </p>
        Finish
        <p class="time-input">
        <input type="date" class="todo-time" id="end-date" value="${info.end_date}"/>
        
        </p>
        <p class="time-input">
        <input type="time" class="todo-time" id="end-time" value="${info.end_time}"/>
        
        </p>
    `;
}
export function create(info) {
    app.innerHTML = `
    <div>
    <h1>Add Task</h1>
    <ul id="task-box">
        ${create_html(info)}
        <button type="submit" id="addBtn" class="task-btn">Save Task</button>
    </ul>

        <button class="nav-btn" id="nav-btn">Back</button>
    </div>
    `;
    const btn = document.getElementById("nav-btn");
    btn.addEventListener("click", todo_list);
    const text_input = document.getElementById("todo-input");
    const start_time = document.getElementById("start-time");
    const start_date = document.getElementById("start-date");
    const end_time = document.getElementById("end-time");
    const end_date = document.getElementById("end-date");
    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", () => {
        if (text_input.value.trim() !== "" && info) {
            let task_id = save_edited_task(trim(text_input), trim(start_time), trim(start_date), trim(end_time), trim(end_date), info.id, info.status);
            Task_detail(task_id);
        }
        else if (text_input.value.trim() !== "" && !info) {
            let task_id = add_task(trim(text_input), trim(start_time), trim(start_date), trim(end_time), trim(end_date));
            Task_detail(task_id);
        }
    });
}
function trim(input) {
    return input.value.trim();
}
