const container = document.getElementById("grid-container");
const gridButton = document.getElementById("grid-button");
let gridItem = document.createElement("div");
let qtdGrid = 0;
gridItem.classList.add("grid-item");

function paint(gridItem){
    gridItem.classList.add("grid-item-painted");
}

function mouseHovering(gridItem){
    gridItem.addEventListener("mouseout", () => {
        paint(gridItem);
    })
}

function createGrid(){

    if(qtdGrid == 0){

        for(i = 0; i < 256 ; i++){
            let gridItemClone = gridItem.cloneNode();
            gridItemClone.addEventListener("mouseover", () => {
                mouseHovering(gridItemClone);
            })
            container.append(gridItemClone);
        }

    }   else{
    }

}

gridButton.addEventListener("click", () => {
    qtdGrid = prompt("Choose how many items on the grid (max. 100): ");
    
    while(qtdGrid > 100 || qtdGrid <= 0){
        qtdGrid = prompt("Invalid value, choose again: ");
    }

});

createGrid();