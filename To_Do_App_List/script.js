let inputs = document.getElementById("inp");        
let text = document.getElementById("taskList");     

function add() {
      let task = inputs.value.trim();
    if (inputs.value == "") {
        alert("Invalid Task");
    } else {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        
        li.innerHTML = `${inputs.value} <i class="fas fa-trash"></i>`;
        li.style.animation = "fadeIn 0.5s ease-in";
        ul.appendChild(li);
        text.appendChild(ul);
        inputs.value = "";

        li.querySelector("i").addEventListener("click", function () {
        ul.classList.add("fade-out");
        setTimeout(() => {
            ul.remove();
        }, 400);
    });
}
}
