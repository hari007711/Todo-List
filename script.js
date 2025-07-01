// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// const filterTasks = document.getElementById("filter-tasks");
// const addButton = document.getElementById("add-task");

// // function addTask() {
// //   const revertTab = document.getElementById("input-box");
// //   revertTab.focus();
// //   if (inputBox.value.trim() === "") {
// //     alert("Please enter the text");
// //     return;
// //   }
// //   const taskTextValue = inputBox.value.trim();
// //   const existingTasks = document.querySelectorAll(".task-text");
// //   for (let i = 0; i < existingTasks.length; i++) {
// //     if (existingTasks[i].textContent === taskTextValue) {
// //       alert("This task already exists!");
// //       // inputBox.value = "";
// //       return;
// //     }
// //   }

// //   const li = document.createElement("li");
// //   const checkbox = document.createElement("input");
// //   checkbox.type = "checkbox";
// //   checkbox.className = "task-checkbox";
// //   checkbox.addEventListener("change", function () {
// //     li.classList.toggle("checked", this.checked);
// //     updateTaskCount();
// //   });

// //   const taskText = document.createElement("span");
// //   taskText.textContent = inputBox.value;
// //   console.log(taskText.textContent, "taskText.textContent");

// //   taskText.className = "task-text";

// //   const deleteBtn = document.createElement("span");
// //   deleteBtn.innerHTML = "\u00d7";
// //   deleteBtn.classList.add("delete-btn");
// //   deleteBtn.addEventListener("click", function (event) {
// //     event.stopPropagation();
// //     li.remove();
// //     updateTaskCount();
// //   });
// //   li.appendChild(checkbox);
// //   li.appendChild(taskText);
// //   li.appendChild(deleteBtn);
// //   listContainer.appendChild(li);
// //   // console.log(listContainer.contains(taskText.textContent), "listContainer");

// //   inputBox.value = "";
// //   updateTaskCount();
// // }

// // function addTask() {
// //   const revertTab = document.getElementById("input-box");
// //   revertTab.focus();
// //   if (inputBox.value.trim() === "") {
// //     alert("Please enter the text");
// //     return;
// //   }

// //   const taskTextValue = inputBox.value.trim();
// //   const existingTasks = document.querySelectorAll(".task-text");
// //   for (let i = 0; i < existingTasks.length; i++) {
// //     if (existingTasks[i].textContent === taskTextValue) {
// //       alert("This task already exists!");
// //       return;
// //     }
// //   }

// //   const li = document.createElement("li");
// //   const checkbox = document.createElement("input");
// //   checkbox.type = "checkbox";
// //   checkbox.className = "task-checkbox";
// //   checkbox.addEventListener("change", function () {
// //     li.classList.toggle("checked", this.checked);
// //     updateTaskCount();
// //   });

// //   const taskText = document.createElement("span");
// //   taskText.textContent = inputBox.value;
// //   taskText.className = "task-text";
// //   taskText.addEventListener("click", function () {
// //     // Make task text editable
// //     const currentText = taskText.textContent;
// //     const input = document.createElement("input");
// //     input.type = "text";
// //     input.value = currentText;
// //     input.className = "edit-input";
// //     taskText.innerHTML = "";
// //     taskText.appendChild(input);

// //     // Focus on input field
// //     input.focus();

// //     // Save changes when Enter is pressed or when input loses focus
// //     input.addEventListener("blur", saveEdit);
// //     input.addEventListener("keypress", function (e) {
// //       if (e.key === "Enter") saveEdit();
// //     });

// //     function saveEdit() {
// //       const newText = input.value.trim();
// //       const existingTasks = document.querySelectorAll(".task-text");
// //       for (let i = 0; i < existingTasks.length; i++) {
// //         if (existingTasks[i].textContent === newText) {
// //           // alert("This task already exists!");
// //           addButton.style.return;
// //         }
// //       }
// //       if (newText !== "") {
// //         taskText.textContent = newText;
// //       } else {
// //         taskText.textContent = currentText; // Revert if empty
// //       }
// //       updateTaskCount();
// //     }
// //   });

// //   const deleteBtn = document.createElement("span");
// //   deleteBtn.innerHTML = "\u00d7";
// //   deleteBtn.classList.add("delete-btn");
// //   deleteBtn.addEventListener("click", function (event) {
// //     event.stopPropagation();
// //     li.remove();
// //     updateTaskCount();
// //   });

// //   li.appendChild(checkbox);
// //   li.appendChild(taskText);
// //   li.appendChild(deleteBtn);
// //   listContainer.appendChild(li);

// //   inputBox.value = "";
// //   updateTaskCount();
// // }

// // function addTask() {
// //   const revertTab = document.getElementById("input-box");
// //   revertTab.focus();
// //   if (inputBox.value.trim() === "") {
// //     alert("Please enter the text");
// //     return;
// //   }

// //   const taskTextValue = inputBox.value.trim();
// //   const existingTasks = document.querySelectorAll(".task-text");
// //   for (let i = 0; i < existingTasks.length; i++) {
// //     if (existingTasks[i].textContent === taskTextValue) {
// //       alert("This task already exists!");
// //       return;
// //     }
// //   }

// //   const li = document.createElement("li");
// //   const checkbox = document.createElement("input");
// //   checkbox.type = "checkbox";
// //   checkbox.className = "task-checkbox";
// //   checkbox.addEventListener("change", function () {
// //     li.classList.toggle("checked", this.checked);
// //     updateTaskCount();
// //   });

// //   const taskText = document.createElement("span");
// //   taskText.textContent = inputBox.value;
// //   taskText.className = "task-text";
// //   taskText.addEventListener("click", function () {
// //     // Make task text editable
// //     const currentText = taskText.textContent;
// //     const input = document.createElement("input");
// //     input.type = "text";
// //     input.value = currentText;
// //     input.className = "edit-input";
// //     taskText.innerHTML = "";
// //     taskText.appendChild(input);

// //     // Focus on input field
// //     input.focus();
// // console.log(input.value,'iiiiiiiiii');

// //     // Save changes when Enter is pressed or when input loses focus
// //     // input.addEventListener("blur", saveEdit);
// //     const existingTasks = document.querySelectorAll(".task-text");
// //   for (let i = 0; i < existingTasks.length; i++) {
// //     if (existingTasks[i].textContent === taskTextValue) {
// //       alert("This task already exists!");
// //       return;
// //     }else{

// //       input.addEventListener("keypress", function (e) {
// //         if (e.key === "Enter") saveEdit();
// //       });
// //     }
// //   }

// //     function saveEdit() {
// //       const newText = input.value.trim();

// //       // Check if the new text is not empty and doesn't already exist
// //       if (newText !== "" && !isTaskNameDuplicate(newText, taskText)) {
// //         taskText.textContent = newText;
// //       } else if (newText === "") {
// //         taskText.textContent = currentText; // Revert if empty
// //       }
// //       updateTaskCount();
// //     }
// //   });

// //   const deleteBtn = document.createElement("span");
// //   deleteBtn.innerHTML = "\u00d7";
// //   deleteBtn.classList.add("delete-btn");
// //   deleteBtn.addEventListener("click", function (event) {
// //     event.stopPropagation();
// //     li.remove();
// //     updateTaskCount();
// //   });

// //   li.appendChild(checkbox);
// //   li.appendChild(taskText);
// //   li.appendChild(deleteBtn);
// //   listContainer.appendChild(li);

// //   inputBox.value = "";
// //   updateTaskCount();
// // }

// function addTask() {
//   const revertTab = document.getElementById("input-box");
//   revertTab.focus();
//   if (inputBox.value.trim() === "") {
//     alert("Please enter the text");
//     return;
//   }

//   const taskTextValue = inputBox.value.trim();
//   const existingTasks = document.querySelectorAll(".task-text");
//   for (let i = 0; i < existingTasks.length; i++) {
//     if (existingTasks[i].textContent === taskTextValue) {
//       alert("This task already exists!");
//       return;
//     }
//   }

//   const li = document.createElement("li");
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.className = "task-checkbox";
//   checkbox.addEventListener("change", function () {
//     li.classList.toggle("checked", this.checked);
//     updateTaskCount();
//   });

//   const taskText = document.createElement("span");
//   taskText.textContent = inputBox.value;
//   taskText.className = "task-text";
//   taskText.addEventListener("click", function () {
//     // Make task text editable
//     const currentText = taskText.textContent;
//     const input = document.createElement("input");
//     input.type = "text";
//     input.value = currentText;
//     input.className = "edit-input";
//     taskText.innerHTML = "";
//     taskText.appendChild(input);

//     // Focus on input field
//     input.focus();

//     // Save changes when Enter is pressed or when input loses focus
//     input.addEventListener("blur", saveEdit);
//     input.addEventListener("keypress", function (e) {
//       if (e.key === "Enter") saveEdit();
//     });

//     function saveEdit() {
//       const newText = input.value.trim();

//       // Check if the new text is not empty and doesn't already exist
//       if (newText !== "") {
//         if (!isTaskNameDuplicate(newText, taskText)) {
//           taskText.textContent = newText;
//         } else {
//           // Allow the user to keep editing if duplicate exists
//           alert("This task already exists! Please choose a different name.");
//           input.focus();  // Keep the input focused for re-editing
//         }
//       } else {
//         taskText.textContent = currentText; // Revert if empty
//       }
//       updateTaskCount();
//     }
//   });

// document.getElementById("add-task").addEventListener("click", addTask);
// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName == "LI") {
//       e.target.classList.toggle("checked");
//       updateTaskCount();
//     } else if (e.target.tagName == "SPAN") {
//       updateTaskCount();
//     }
//   },
//   false
// );

// console.log(listContainer, "listContainer");

// function isTaskNameDuplicate(newText, currentTask) {
//   const existingTasks = document.querySelectorAll(".task-text");
//   for (let i = 0; i < existingTasks.length; i++) {
//     if (existingTasks[i].textContent === newText && existingTasks[i] !== currentTask) {
//       // alert("This task already exists!");
//       // return true;
//     }
//   }
//   return false; // No duplicate found
// }

// function updateTaskCount() {
//   const tasks = listContainer.querySelectorAll("li");
//   let count = 0;
//   tasks.forEach((task) => {
//     const checkbox = task.querySelector(".task-checkbox");
//     const filterValue = filterTasks.value;
//     if (filterValue === "all") {
//       task.style.display = "flex";
//     } else if (filterValue === "completed" && checkbox.checked) {
//       task.style.display = "flex";
//     } else if (filterValue === "pending" && !checkbox.checked) {
//       task.style.display = "flex";
//     } else {
//       task.style.display = "none";
//     }

//     if (!checkbox.checked) {
//       count++;
//     }
//   });
//   document.getElementById(
//     "task-count"
//   ).textContent = `Your remaining todos: ${count}`;
// }

// filterTasks.addEventListener("change", updateTaskCount);
// const lightImg = document.getElementById("light-img");
// const darkImg = document.getElementById("dark-img");
// const toggleBtn = document.getElementById("theme-toggle-btn");
// const card = document.getElementById("card");
// const heading = document.getElementById("title-head");
// const countVar = document.getElementById("task-count");
// let themes = false;
// const taskAdd = document.getElementById("input-box");
// // const neww = document.getElementById("list-container");

// // toggleBtn.addEventListener("click", () => {
// //   const isLightVisible = lightImg.style.display !== "none";
// //   themes = isLightVisible;
// //   localStorage.setItem("theme", isLightVisible);
// //   if (isLightVisible) {
// //     lightImg.style.display = "none";
// //     darkImg.style.display = "inline";
// //     card.style.backgroundColor = "#1e1e1e";
// //     heading.style.color = "#fff";
// //     countVar.style.color = "#fff";
// //     taskAdd.style.color = "#fff";
// //     filterTasks.style.color = "#fff";
// //     filterTasks.style.background = "#000";
// //     neww.li.span.style.color="#fff";
// //   } else {
// //     darkImg.style.display = "none";
// //     lightImg.style.display = "inline";
// //     card.style.backgroundColor = "#ffffff";
// //     heading.style.color = "#000";
// //     countVar.style.color = "#000";
// //     taskAdd.style.color = "#000";
// //     filterTasks.style.color = "#000";
// //     filterTasks.style.background = "#fff";
// //   }
// // });

// const darkTask = document.getElementById("list-container");

// toggleBtn.addEventListener("click", () => {
//   const isLightVisible = lightImg.style.display !== "none";
//   themes = isLightVisible;
//   localStorage.setItem("theme", isLightVisible);

//   if (isLightVisible) {
//     lightImg.style.display = "none";
//     darkImg.style.display = "inline";
//     card.style.backgroundColor = "#1e1e1e";
//     heading.style.color = "#fff";
//     countVar.style.color = "#fff";
//     taskAdd.style.color = "#fff";
//     filterTasks.style.color = "#fff";
//     filterTasks.style.background = "#000";
//     const taskTexts = darkTask.querySelectorAll(".task-text");
//     taskTexts.forEach((taskText) => {
//       taskText.style.color = "#fff";
//     });
//   } else {
//     darkImg.style.display = "none";
//     lightImg.style.display = "inline";
//     card.style.backgroundColor = "#ffffff";
//     heading.style.color = "#000";
//     countVar.style.color = "#000";
//     taskAdd.style.color = "#000";
//     filterTasks.style.color = "#000";
//     filterTasks.style.background = "#fff";
//     const taskTexts = neww.querySelectorAll(".task-text");
//     taskTexts.forEach((taskText) => {
//       taskText.style.color = "#000";
//     });
//   }
// });

// updateTaskCount();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const filterTasks = document.getElementById("filter-tasks");

function addTask() {
  const revertTab = document.getElementById("input-box");
  revertTab.focus();
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
  checkbox.addEventListener("change", function () {
    li.classList.toggle("checked", this.checked);
    updateTaskCount();
  });

  const taskText = document.createElement("span");
  taskText.textContent = inputBox.value;
  taskText.className = "task-text";

  // Make task text editable on click
  taskText.addEventListener("click", function () {
    const currentText = taskText.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "edit-input";
    taskText.innerHTML = "";
    taskText.appendChild(input);

    // Focus on the input field
    input.focus();

    // Save changes when Enter is pressed or when input loses focus
    // input.addEventListener("blur", saveEdit);
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") saveEdit();
    });

    // Function to save edited task name
    function saveEdit() {
      const newText = input.value.trim();

      // Check if the new text is not empty and doesn't already exist
      if (newText !== "") {
        if (!isTaskNameDuplicate(newText, taskText)) {
          taskText.textContent = newText;
          updateTaskCount(); // Update the task count when saving
        } else {
          // Show alert if duplicate exists and stop the save operation
          alert("This task already exists! Please choose a different name.");
          input.focus(); // Keep the input focused for re-editing
          return true;
        }
      } else {
        taskText.textContent = currentText; // Revert if empty
      }
    }
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "\u00d7";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    li.remove();
    updateTaskCount();
  });

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  listContainer.appendChild(li);

  inputBox.value = "";
  updateTaskCount();
}

// Add task when "Add Task" button is clicked
document.getElementById("add-task").addEventListener("click", addTask);

// Handle clicking of task list items
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      updateTaskCount();
    } else if (e.target.tagName == "SPAN") {
      updateTaskCount();
    }
  },
  false
);

// Function to check if a task name already exists in the list
function isTaskNameDuplicate(newText, currentTask) {
  const existingTasks = document.querySelectorAll(".task-text");
  for (let i = 0; i < existingTasks.length; i++) {
    if (
      existingTasks[i].textContent === newText &&
      existingTasks[i] !== currentTask
    ) {
      return true; // Duplicate task found
    }
  }
  return false; // No duplicate found
}

// Update task count and handle filtering based on task status (completed/pending)
function updateTaskCount() {
  const tasks = listContainer.querySelectorAll("li");
  let count = 0;
  tasks.forEach((task) => {
    const checkbox = task.querySelector(".task-checkbox");
    const filterValue = filterTasks.value;

    // Filter tasks based on the selected filter option
    if (filterValue === "all") {
      task.style.display = "flex";
    } else if (filterValue === "completed" && checkbox.checked) {
      task.style.display = "flex";
    } else if (filterValue === "pending" && !checkbox.checked) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }

    if (!checkbox.checked) {
      count++;
    }
  });
  document.getElementById(
    "task-count"
  ).textContent = `Your remaining todos: ${count}`;
}

// Listen for changes to filter dropdown
filterTasks.addEventListener("change", updateTaskCount);
const lightImg = document.getElementById("light-img");
const darkImg = document.getElementById("dark-img");
const toggleBtn = document.getElementById("theme-toggle-btn");
const card = document.getElementById("card");
const heading = document.getElementById("title-head");
const countVar = document.getElementById("task-count");
let themes = false;
const taskAdd = document.getElementById("input-box");

const darkTask = document.getElementById("list-container");

toggleBtn.addEventListener("click", () => {
  const isLightVisible = lightImg.style.display !== "none";
  themes = isLightVisible;

  if (isLightVisible) {
    lightImg.style.display = "none";
    darkImg.style.display = "inline";
    card.style.backgroundColor = "#1e1e1e";
    heading.style.color = "#fff";
    countVar.style.color = "#fff";
    taskAdd.style.color = "#fff";
    filterTasks.style.color = "#fff";
    filterTasks.style.background = "#000";
    const taskTexts = darkTask.querySelectorAll(".task-text");
    taskTexts.forEach((taskText) => {
      taskText.style.color = "#fff";
    });
  } else {
    darkImg.style.display = "none";
    lightImg.style.display = "inline";
    card.style.backgroundColor = "#ffffff";
    heading.style.color = "#000";
    countVar.style.color = "#000";
    taskAdd.style.color = "#000";
    filterTasks.style.color = "#000";
    filterTasks.style.background = "#fff";
    const taskTexts = darkTask.querySelectorAll(".task-text");
    taskTexts.forEach((taskText) => {
      taskText.style.color = "#000";
    });
  }
});



updateTaskCount();
