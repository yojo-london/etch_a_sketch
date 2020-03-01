let cellSelector;

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
	cellSelector = document.querySelectorAll('.grid-item')
  };

    addMouseoverListen();
	addMouseClickListen();
}

makeRows(16, 16);

function removeGrid(className) {
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function chooseGrid() {
	var size = prompt("Please enter your desired canvas size");
	if (size == null) {
    txt = "User cancelled the prompt.";
	} else {
	removeGrid("grid-item");
    makeRows(size, size);
  }

}

function resetGrid() {
    cellSelector.forEach((cell) => {
            cell.style.backgroundColor = "white";
    });
};

function addMouseoverListen(){
    cellSelector.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = "grey";
        });
    });
};

function addMouseClickListen(){
    cellSelector.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            cell.style.backgroundColor = "white";
        });
    });
};
