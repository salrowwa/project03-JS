const input = document.getElementById("task");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");
const taskCount = document.getElementById("taskCount");

list.style.listStyle = "none";
list.style.padding = "20px";
list.style.margin = "0";
list.style.color = "#7176ad";
list.style.fontWeight = "bold";

function updateCount() 
{
  taskCount.textContent = list.children.length;
}

function addTask() 
{
  const text = input.value.trim();
  if (text === "")
      return;

  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.gap = "5px";
  li.style.marginBottom = "5px";

  const p = document.createElement("p");
  p.textContent = text;
  p.style.flex = "1";
  p.style.margin = "0";
  p.style.wordBreak = "break-word";

  const completeBtn = document.createElement("button");
  completeBtn.type = "button";
  completeBtn.textContent = "✓";
  completeBtn.addEventListener("click", function () 
  {
    if (p.style.textDecoration === "line-through") 
    {
      p.style.textDecoration = "none";
      p.style.opacity = "1";
    } else {
      p.style.textDecoration = "line-through";
      p.style.opacity = "0.5";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "✕";
  deleteBtn.addEventListener("click", function () 
  {
    li.remove();
    updateCount();
  });

  li.appendChild(p);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
  input.focus();
  updateCount();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) 
{
  if (event.key === "Enter") 
  {
    addTask();
  }
});

updateCount();
