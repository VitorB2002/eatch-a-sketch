const container = document.getElementById("grid-container");
let gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

for(i = 0; i < 256 ; i++){
    let gridItemClone = gridItem.cloneNode();
    container.append(gridItemClone);
    console.log("rodei");
}