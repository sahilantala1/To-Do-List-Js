let inputbox = document.getElementById("inputbox");
let taskcont = document.getElementById("task-container");

function addTask() {
    if (inputbox.value === "") {
        alert("Add Somthing");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        taskcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}
taskcont.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();

    }
}, false
);

function savedata() {
    localStorage.setItem("data", taskcont.innerHTML);
}
function showtask(){
    taskcont.innerHTML=localStorage.getItem("data");    
}
showtask();
