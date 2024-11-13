


function addTodo() {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = todoText;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
 }













