const todoList = [
  {
    name: "Complete online JavaScript course",
    dueDate: "2020-09-30",
  },
  {
    name: "Jog around the park 3x",
    dueDate: "2020-09-30",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `<div>${name}</div>
    <div>${dueDate}</div>
    <button
    onclick= "
    todoList.splice(${i},1);
    renderTodoList();
    "
    class="delete color"
    ><i class="ri-delete-bin-line"></i></button>
    `;

    todoListHTML += html;
  }
  document.querySelector(".js-display-section").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-todo-list-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-date-input");

  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  renderTodoList();

  inputElement.value = "";
  dateInputElement.value = "";
}

function addOnEnter(event) {
  if (event === "Enter") {
    addTodo();
  }
}
