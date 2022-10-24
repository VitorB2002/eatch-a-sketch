const container = document.getElementById("grid-container");
let gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

function paint(gridItem){
    gridItem.classList.add("grid-item-painted");
}

for(i = 0; i < 256 ; i++){
    let gridItemClone = gridItem.cloneNode();
    gridItemClone.addEventListener("click", () => {
        paint(gridItemClone);
    })
    container.append(gridItemClone);
}