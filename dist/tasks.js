let sample_tasks = [
    {
        id: 0,
        "task": "You have have not created any task yet.",
        "status": "Pending"
    }
];
export let Tasks = [];
export function add_task(task, start_time, start_date, end_time, end_date) {
    const obj = {
        id: Date.now(),
        task,
        status: "Pending",
        start_time,
        start_date,
        end_time,
        end_date
    };
    Tasks.push(obj);
    saveTasks();
    return obj.id;
}
export function get_task_list() {
    return Tasks.length > 0 ? Tasks : sample_tasks;
}
export function toggle_status(id, callback_func) {
    console.log("95Qwerty");
    const task = findTask(id);
    if (!task)
        return;
    console.log("6Qwerty", task);
    task.status = task.status === "Completed" ? "Pending" : "Completed";
    saveTasks();
    callback_func(id);
}
export function delete_task(id, callback_func) {
    if (!findTask(id))
        return;
    Tasks = Tasks.filter(task => task.id !== id);
    saveTasks();
    callback_func(id);
}
export function edit_task(id, callback_func) {
    const task = findTask(id);
    if (!task)
        return;
    callback_func(task);
}
export function save_edited_task(task, start_time, start_date, end_time, end_date, id, status) {
    const edited_task = findTask(id);
    if (edited_task) {
        edited_task.task = task,
            edited_task.status = status,
            edited_task.start_date = start_time,
            edited_task.start_time = start_date,
            edited_task.end_date = end_time,
            edited_task.end_time = end_date;
        saveTasks();
        return edited_task.id;
    }
    return id;
}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
}
function loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        Tasks = JSON.parse(stored);
    }
}
loadTasks(); // ✅ initialize from storage
export function findTask(id) {
    return Tasks.find(t => t.id === id);
}
