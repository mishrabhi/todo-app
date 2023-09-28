// let todoList = document.querySelector(".todo-list");
// let newTodoInput = document.querySelector("#newTodo");
// let addTodoButton = document.querySelector("#addTodo");

document.addEventListener("DOMContentLoaded", function () {
  const todoList = document.querySelector(".todo-list");
  const newTodoInput = document.querySelector("#newTodo");
  const addTodoButton = document.querySelector("#addTodo");

  addTodoButton.addEventListener("click", function () {
    const todoText = newTodoInput.value.trim();
    if (todoText !== "") {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      todoItem.innerHTML = `
                        <span class="todo-text">${todoText}</span>
                        <button class="delete-button">Delete</button>
                    `;
      todoList.appendChild(todoItem);
      newTodoInput.value = "";
    }
  });

  todoList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      event.target.parentElement.remove();
    }
  });
});
