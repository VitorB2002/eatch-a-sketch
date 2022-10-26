const container = document.getElementById("grid-container");
const gridButton = document.getElementById("grid-button");
const containerWidth = 1200;
let gridItem = document.createElement("div");
let qtdGrid = 0;
let oldQtdGrid
let itemsWidth;
gridItem.classList.add("grid-item");

function paint(gridItem){
    gridItem.classList.add("grid-item-painted");
}

function mouseHovering(gridItem){
    gridItem.addEventListener("mouseout", () => {
        paint(gridItem);
    })
}

function resetGrid(){

    if(oldQtdGrid == 0){
        oldQtdGrid = 16;
    }

    for(i = 0 ; i < oldQtdGrid*oldQtdGrid ; i++){
        container.removeChild(container.lastElementChild);
    }
}

function createGrid(){

    if(qtdGrid == 0){

        itemsWidth = containerWidth/16;
        gridItem.style.width = String(itemsWidth + "px");
        gridItem.style.height = gridItem.style.width;

        //16x16 grid
        for(i = 0; i < 16*16 ; i++){
            let gridItemClone = gridItem.cloneNode();
            gridItemClone.addEventListener("mouseover", () => {
                mouseHovering(gridItemClone);
            })
            container.append(gridItemClone);
        }

    }   else{

        resetGrid();
        itemsWidth = containerWidth/qtdGrid;
        gridItem.style.width = String(itemsWidth + "px");
        gridItem.style.height = gridItem.style.width;

        for(i = 0; i < qtdGrid*qtdGrid ; i++){
            let gridItemClone = gridItem.cloneNode();
            gridItemClone.addEventListener("mouseover", () => {
                mouseHovering(gridItemClone);
            })
            container.append(gridItemClone);
        }

    }

}

gridButton.addEventListener("click", () => {
    oldQtdGrid = qtdGrid;
    qtdGrid = prompt("Choose a value (max. 100), and the grid will be recreated as value x value pixels: ");
    
    while(qtdGrid > 100 || qtdGrid <= 0){
        qtdGrid = prompt("Invalid value, choose again (max. 100): ");
    }

    createGrid();

});

createGrid();