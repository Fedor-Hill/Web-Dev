const ideaInput = document.getElementById("ideaInput");
const btnAdd = document.getElementById("btn-add");
const ideaList = document.getElementById("ideaList");

function createTodoItem(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checki";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btnDel";
  deleteBtn.textContent = "x";


  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    ideaList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

function addTask() {
  const text = ideaInput.value.trim();
  if (!text) return;

  ideaList.appendChild(createTodoItem(text));
  ideaInput.value = "";
  ideaInput.focus();
}

btnAdd.addEventListener("click", addTask);

ideaInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});


ideaList.appendChild(createTodoItem("Slay the Dragon"));
ideaList.appendChild(createTodoItem("Make a child"));
ideaList.appendChild(createTodoItem("Become a king"));