import { todo_list } from "./todo_list.js";
export const app = document.getElementById("app");
const welcome_message = [
    "Welcome! Let's get things done today🚀",
    "Every big goal starts with a small task. What's on your list today?",
    "Hello👋 Ready to organise your day?",
    "Tick off tasks, one check at a time✅"
];
const random_message = welcome_message[Math.floor(Math.random() * welcome_message.length)];
export function Home() {
    app.innerHTML = `
        <div>
            <h1>
                Your Todo-App
            </h1>
            <h4 id="welcome-text">
                Time: An Asset that must be managed wisely
            </h2>
            <p id="welcome_msg">${random_message}<p>
            </div>
        <div id="div2">
            
            <p id="btn-text">Let's begin!<p>
            <p>

                <button class="nav-btn" id="nav-btn">Continue</button>
            </p>
        </div>

    `;
    const btn = document.getElementById("nav-btn");
    btn.addEventListener("click", todo_list);
}
Home();
