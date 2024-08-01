const numbers = parseInt(prompt("Enter a value:"));


const big = document.querySelector(".big-square");
for (index = 0; index < numbers; index++) {
    var newDiv = document.createElement("div");
    
    for (let indexj = 0; indexj < numbers; indexj++) {
        var newDivInAnotherDiv = document.createElement("div");
        newDiv.appendChild(newDivInAnotherDiv);
        
    }
    big.appendChild(newDiv);
}
var miniBoxes = document.querySelectorAll('.big-square div div');    
miniBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "blue";
    });
}); 

const btn = document.querySelector("#novo");

btn.addEventListener("click", () => {
    const removeDiv = document.getElementById("novo");
    remove.innerHTML = "";
    const numbers = parseInt(prompt("Enter a value:"));
    const big = document.querySelector(".big-square");
    for (index = 0; index < numbers; index++) {
        var newDiv = document.createElement("div");
        
        for (let indexj = 0; indexj < numbers; indexj++) {
            var newDivInAnotherDiv = document.createElement("div");
            newDiv.appendChild(newDivInAnotherDiv);
            
        }
        big.appendChild(newDiv);
    }
    var miniBoxes = document.querySelectorAll('.big-square div div');    
    miniBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "blue";
        });
    }); 
  });