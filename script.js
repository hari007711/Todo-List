const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const filterTasks = document.getElementById("filter-tasks");
const taskCount = document.getElementById("task-count");
const selectText = document.getElementById("selectText");
const options = document.querySelectorAll(".options");
const showList = document.getElementById("select-list");
const arrowIcon = document.getElementById("arrow-icon");
let selectField = document.getElementById("filter-tasks");

let selectedFilter = "all";

selectField.onclick = function (e) {
  e.stopPropagation();
  showList.classList.toggle("hide-list");
  arrowIcon.classList.toggle("rotate");
};

filterTasks.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    showList.classList.toggle("hide-list");
    arrowIcon.classList.toggle("rotate");
    const expanded = !showList.classList.contains("hide-list");
    filterTasks.setAttribute("aria-expanded", expanded);
    if (expanded) {
      setTimeout(() => options[0].focus(), 0);
    }
  }
});

options.forEach((option, index) => {
  option.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = options[index + 1] || options[0];
      next.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = options[index - 1] || options[options.length - 1];
      prev.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      option.click();
    }
  });

  option.addEventListener("click", () => {
    const selectedText = option.textContent.trim();
    selectText.textContent = selectedText;
    selectedFilter = selectedText.toLowerCase().replace("-", "");
    showList.classList.add("hide-list");
    arrowIcon.classList.remove("rotate");
    filterTasks.setAttribute("aria-expanded", "false");
    updateTaskCount();
  });
});

document.addEventListener("click", () => {
  showList.classList.add("hide-list");
  arrowIcon.classList.remove("rotate");
  filterTasks.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    showList.classList.add("hide-list");
    arrowIcon.classList.remove("rotate");
    filterTasks.setAttribute("aria-expanded", "false");
    filterTasks.focus();
  }
});

function addTask() {
  inputBox.focus();
  const taskTextValue = inputBox.value.trim();
  if (taskTextValue === "") {
    alert("Please enter the text");
    return;
  }
  if (
    [...document.querySelectorAll(".task-text")].some(
      (task) => task.textContent === taskTextValue
    )
  ) {
    alert("This task already exists!");
    return;
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
  taskText.tabIndex = 0;
  taskText.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskText.textContent;
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
          taskText.textContent = taskTextValue;
        }
      }
    });
  });

  const deleteBtn = document.createElement("span");
  const img = document.createElement("img");
  img.src = "Assets/remove.png";
  img.title = "Delete this task";
  img.alt = "Delete";
  img.className = "delete-icon";
  img.style.height = "20px";
  deleteBtn.className = "delete-btn";
  deleteBtn.tabIndex = 0;
  deleteBtn.appendChild(img);

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
  return [...document.querySelectorAll(".task-text")].some(
    (task) => task !== currentTask && task.textContent === newText
  );
}

function updateTaskCount() {
  const tasks = [...listContainer.querySelectorAll("li")];
  let filteredTasks = [];
  if (["az", "za"].includes(selectedFilter)) {
    filteredTasks = [...tasks].sort((a, b) => {
      const textA = a.querySelector(".task-text").textContent.toLowerCase();
      const textB = b.querySelector(".task-text").textContent.toLowerCase();
      return selectedFilter === "az"
        ? textA.localeCompare(textB)
        : textB.localeCompare(textA);
    });
    filteredTasks.forEach((task) => {
      task.style.display = "flex";
      listContainer.appendChild(task);
    });
  } else {
    filteredTasks = tasks.filter((task) => {
      const checked = task.querySelector(".task-checkbox").checked;
      if (selectedFilter === "all") return true;
      if (selectedFilter === "pending") return !checked;
      if (selectedFilter === "completed") return checked;
    });

    tasks.forEach((task) => {
      task.style.display = filteredTasks.includes(task) ? "flex" : "none";
    });
  }
  const remaining = filteredTasks.filter(
    (task) => !task.querySelector(".task-checkbox").checked
  ).length;
  taskCount.textContent = `Your remaining todos: ${remaining}`;
}

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

document.getElementById("add-task").addEventListener("click", addTask);
updateTaskCount();
