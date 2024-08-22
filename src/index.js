import "./styles.css";

// initial todos
// DO NOT EDIT THIS ARRAY
// You may add props to objects if needed.
let todos = [
  {
    todoID: 0,
    todoText: "Finish Homework",
    todoComplete: false,
  },
  {
    todoID: 1,
    todoText: "Walk the dog",
    todoComplete: true,
  },
  {
    todoID: 2,
    todoText: "Clean my room",
    todoComplete: false,
  },
];

// Variables
const todoList = document.querySelector(".todoList");
const addBtn = document.querySelector("#addTodoBtn");
const addInput = document.querySelector("#addTodoInput");
const clrBtn = document.querySelector("#clrBtn");
const pendingString = document.querySelector("#pendingSpan");
let trashIcon = `<span><i class="fa fa-trash"></i></span>`;
let pendingTasks = -1;
const todoObj = {
  todoID: -1,
  todoText: "",
  todoComplete: true,
};

// Creates and appends a todo to the todolist
let createAndAppendTodoTag = (id, txt, status) => {
  let listTag = document.createElement("li");
  if (status == false) {
    listTag.classList.add("done");
    pendingTasks += 1;
    updatePending();
  }
  listTag.id = id;
  listTag.innerHTML = `${String(txt) + trashIcon}`;
  listTag.addEventListener("click", () => {
    toggleTodo(listTag);
  });
  todoList.appendChild(listTag);
};

// Updates the pending tasks string
function updatePending() {
  pendingString.innerHTML = `You have ${String(pendingTasks)} pending tasks.`;
}

// Adds a new todo to the todo array
function addToTodoArray(index, text, status) {
  let newTodo = Object.create(todoObj);
  newTodo.todoID = index;
  newTodo.todoText = text;
  newTodo.todoComplete = status;
  todos.push(newTodo);
}

//handle the default data
todos.forEach(defaultTodos);
function defaultTodos(todo) {
  let id = todo.todoID;
  let txt = todo.todoText;
  let status = todo.todoComplete;
  createAndAppendTodoTag(id, txt, status);
}

//Handles toggling of the completion of tasks
function toggleTodo(el) {
  el.classList.toggle("done");
  if (el.classList.contains("done")) {
    pendingTasks -= 1;
  } else {
    pendingTasks += 1;
  }
  updatePending();
  updateArray();
}

//Updates the array
function updateArray() {
  console.log(todos);
}

//Handles the add button and input
function addBtnTriggered() {
  let currInput = addInput.value;
  if (currInput != "") {
    let index = todos.length + 1;
    let text = currInput;
    let status = true;
    createAndAppendTodoTag(index, text, status);
    addToTodoArray(index, text, status);
  }
}
addBtn.addEventListener("click", () => {
  addBtnTriggered();
});
addInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtnTriggered();
  }
});

//Handles the Clear Button
clrBtn.addEventListener("click", () => {
  console.log(`${pendingTasks}`);
});
