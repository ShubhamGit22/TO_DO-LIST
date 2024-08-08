var inputBox = document.getElementById("input-box")
var listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00D7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked")                                                //it removes class if already present and if not then it adds that class.
            saveData()
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();                                            //if clicked on span then it will remove the parent element which is "li".
            saveData();
        }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showData()