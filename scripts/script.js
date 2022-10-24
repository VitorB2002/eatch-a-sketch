const container = document.getElementById("grid-container");
let gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

function paint(gridItem){
    gridItem.classList.add("grid-item-painted");
}

function mouseHovering(gridItem){
    gridItem.addEventListener("mouseout", () => {
        paint(gridItem);
    })
}

for(i = 0; i < 256 ; i++){
    let gridItemClone = gridItem.cloneNode();
    gridItemClone.addEventListener("mouseover", () => {
        mouseHovering(gridItemClone);
    })
    container.append(gridItemClone);
}