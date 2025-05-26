
const taskInput = document.querySelector("#task-input");
const button = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");
button.addEventListener("click", btn);
const empty = document.querySelector("#empty");

function btn() {

    inputValue = taskInput.value.trim()
    
    
    if (inputValue === "") {
        empty.innerText = "! enter a specific task"
        return
    } 
   

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.innerHTML = inputValue;
    

    span.onclick =() => {
        li.classList.toggle("completed");
    }

    const createBtn = document.createElement("img");
    createBtn.setAttribute("src","./img.png" )
    createBtn.style.width = "20px"
//    createBtn.className = "delete-btn"
    
    createBtn.onclick =() => {
       taskList.removeChild(li)
    }

    li.appendChild(span);
    li.appendChild(createBtn);
    console.log(li);
    
    taskList.appendChild(li);

    taskInput.value = "";
   
}