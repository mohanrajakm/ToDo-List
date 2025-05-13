function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter something!");
    return;
  }

  const ul = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;

  const del = document.createElement("span");
  del.textContent = "x";
  del.onclick = function () {
    li.remove();
  };

  li.appendChild(del);
  ul.appendChild(li);

  input.value = "";
}
