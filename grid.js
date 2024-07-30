
const big = document.querySelector(".big-square");
for (index = 0; index < 16; index++) {
    var newDiv = document.createElement("div");
    
    for (let indexj = 0; indexj < 16; indexj++) {
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