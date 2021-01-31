const container = document.querySelector("#container");
const body = document.querySelector("body");
let squares;

const clear = document.createElement("button");
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
const slider = document.getElementsByClassName("slider")[0];
let grid = 0;

slider.oninput = function(){
grid = slider.value;
initialise(grid);
}


function initialise(gridNumber){
    let gridArea = gridNumber * gridNumber;
    squares = new Array(gridArea);
    for(let i = 0; i < gridArea; i++){
        squares[i] = document.createElement("div");
        squares[i].classList.add("block");
        container.style.gridTemplateColumns = `repeat(${gridNumber},80px)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 80px)`;
        container.appendChild(squares[i]);
    }

    clear.classList.add("clear-btn");
    clear.textContent = "Clear";
    body.appendChild(clear);
} 

function changeColor(e){
    e.target.style.backgroundColor = "#000";
}

function clearColor(){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "#fff";
    }
}

clear.onclick = clearColor;
document.addEventListener("mouseover", function(e){
    if(e.target.className == "block"){
        changeColor(e);
    }else if(e.target.class != "block"){
    }
});

initialise(4);

