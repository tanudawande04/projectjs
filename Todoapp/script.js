document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.querySelector(".todo-form");
    const todoInput = document.querySelector(".todo-input");
    const todoList = document.querySelector(".todo-list");

    // Add a new todo item
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        const todoText = todoInput.value.trim();
        if (todoText === "") return; // Do nothing if input is empty

        const todoItem = document.createElement("li");
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-button">Delete</button>
        `;

        // Add delete functionality
        todoItem.querySelector(".delete-button").addEventListener("click", () => {
            todoItem.remove();
        });

        todoList.appendChild(todoItem);
        todoInput.value = ""; // Clear input field
    });
});