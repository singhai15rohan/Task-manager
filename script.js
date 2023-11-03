const ip = document.querySelector(".add input")
const add = document.querySelector(".add button")
const alltask = document.querySelector(".alltask")

add.addEventListener("click",function()
{
    const val = ip.value;
    ip.value = ""

    const task = document.createElement("div");
    task.classList.add("task");

    //create edit button
    const editbtn = document.createElement("button");
    editbtn.classList.add("edit");
    editbtn.textContent = "edit";
    //create delete button
    const deletebtn = document.createElement("button");
    deletebtn.classList.add("delete");
    deletebtn.textContent = "delete";
    
    ///create input box
    const ipbox = document.createElement("input");
    ipbox.value = val;
    // now can't be edited
    ipbox.toggleAttribute("disabled")
    
    task.append(ipbox);
    task.append(deletebtn);
    task.append(editbtn);

    alltask.append(task);
    deletebtn.addEventListener("click",function()
    {
        deletebtn.parentElement.remove()

    })
    editbtn.addEventListener("click",function()
    {
        // === mtlb strict equality
       if(editbtn.textContent==="edit")
       editbtn.textContent="save"
    else
    editbtn.textContent="edit"
        ipbox.toggleAttribute("disabled")

    })
})
