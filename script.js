const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const filterTasks = document.getElementById("filter-tasks");
const taskCount = document.getElementById("task-count");

function addTask() {
  inputBox.focus();

  if (inputBox.value.trim() === "") {
    alert("Please enter the text");
    return;
  }

  const taskTextValue = inputBox.value.trim();
  const existingTasks = document.querySelectorAll(".task-text");
  for (let i = 0; i < existingTasks.length; i++) {
    if (existingTasks[i].textContent === taskTextValue) {
      alert("This task already exists!");
      return;
    }
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("checked", checkbox.checked);
    updateTaskCount();
  });

  checkbox.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      checkbox.checked = !checkbox.checked;
      li.classList.toggle("checked", checkbox.checked);
      updateTaskCount();
    }
  });

  const taskText = document.createElement("span");
  taskText.textContent = taskTextValue;
  taskText.className = "task-text";

  taskText.addEventListener("click", () => {
    const currentText = taskText.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "edit-input";
    taskText.innerHTML = "";
    taskText.appendChild(input);

    input.focus();

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const newText = input.value.trim();
        if (newText && !isTaskNameDuplicate(newText, taskText)) {
          taskText.textContent = newText;
          updateTaskCount();
        } else if (isTaskNameDuplicate(newText, taskText)) {
          alert("This task already exists! Please choose a different name.");
          input.focus();
        } else {
          taskText.textContent = currentText;
        }
      }
    });
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "\u00d7";
  deleteBtn.className = "delete-btn";
  deleteBtn.setAttribute("tabindex", "0");

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateTaskCount();
  });

  deleteBtn.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      li.remove();
      updateTaskCount();
    }
  });

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  listContainer.appendChild(li);

  inputBox.value = "";
  updateTaskCount();
}

function isTaskNameDuplicate(newText, currentTask) {
  const existingTasks = document.querySelectorAll(".task-text");
  return Array.from(existingTasks).some(
    (task) => task !== currentTask && task.textContent === newText
  );
}

function updateTaskCount() {
  const tasks = Array.from(listContainer.querySelectorAll("li"));
  const filterValue = filterTasks.value;
  let filteredTasks = [];
  let count = 0;

  if (["az", "za"].includes(filterValue)) {
    filteredTasks = tasks.slice();
    filteredTasks.sort((a, b) => {
      const textA = a.querySelector(".task-text").textContent.toLowerCase();
      const textB = b.querySelector(".task-text").textContent.toLowerCase();
      return filterValue === "az"
        ? textA.localeCompare(textB)
        : textB.localeCompare(textA);
    });

    filteredTasks.forEach((task) => {
      listContainer.appendChild(task);
      task.style.display = "flex";
      if (!task.querySelector(".task-checkbox").checked) count++;
    });
  } else {
    filteredTasks = tasks.filter((task) => {
      const checkbox = task.querySelector(".task-checkbox");
      if (filterValue === "all") return true;
      if (filterValue === "completed") return checkbox.checked;
      if (filterValue === "pending") return !checkbox.checked;
      
      return true;
    });

    tasks.forEach((task) => {
      if (filteredTasks.includes(task)) {
        task.style.display = "flex";
        if (!task.querySelector(".task-checkbox").checked) count++;
      } else {
        task.style.display = "none";
      }
    });
  }

  taskCount.textContent = `Your remaining todos: ${count}`;
}

document.getElementById("add-task").addEventListener("click", addTask);
filterTasks.addEventListener("change", updateTaskCount);

const lightImg = document.getElementById("light-img");
const darkImg = document.getElementById("dark-img");
const toggleBtn = document.getElementById("theme-toggle-btn");
const card = document.getElementById("card");
const heading = document.getElementById("title-head");
const taskAdd = document.getElementById("input-box");

toggleBtn.addEventListener("click", () => {
  const isLightVisible = lightImg.style.display !== "none";

  if (isLightVisible) {
    lightImg.style.display = "none";
    darkImg.style.display = "inline";
    card.style.backgroundColor = "#1e1e1e";
    heading.style.color = "#fff";
    taskCount.style.color = "#fff";
    taskAdd.style.color = "#fff";
    filterTasks.style.color = "#fff";
    filterTasks.style.background = "#000";

    document
      .querySelectorAll(".task-text")
      .forEach((el) => (el.style.color = "#fff"));
  } else {
    darkImg.style.display = "none";
    lightImg.style.display = "inline";
    card.style.backgroundColor = "#ffffff";
    heading.style.color = "#000";
    taskCount.style.color = "#000";
    taskAdd.style.color = "#000";
    filterTasks.style.color = "#000";
    filterTasks.style.background = "#fff";

    document
      .querySelectorAll(".task-text")
      .forEach((el) => (el.style.color = "#000"));
  }
});

updateTaskCount();
