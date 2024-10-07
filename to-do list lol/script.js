const input = document.getElementById("input-field");
const addToDisplay = document.getElementById("add-btn");
const taskList = document.querySelector("ul")

//add task to the list
addToDisplay.addEventListener("click", function() {
    const inputValue = input.value;

    if(inputValue) {
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;

        

        //create parent div for delete button 
        const deleteContainer = document.createElement("div");
        deleteContainer.classList.add("delete-container");

        //create the delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-task");

        //ability to delete a task
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(listItem);
        })

      
        listItem.appendChild(deleteContainer);
        deleteContainer.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        
    } else {
        alert("Please input a valid task");
    }
    input.value = "";
});

const clearAllBtn = document.getElementById("clear-all-btn");

clearAllBtn.addEventListener("click", function() {
    taskList.innerHTML = "";
});
    

