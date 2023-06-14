const mainDiv = document.querySelector('.main-div');

const resetGridButton = document.querySelector('.create-grid');
resetGridButton.addEventListener('click', () => {
    createGrid();
});

const clearGridButton = document.querySelector('.clear-grid');
clearGridButton.addEventListener('click', () => {
    clearGrid();
});

function createGrid() {
    removeGrid();
    let gridSize = 0;
    while (!(gridSize > 0 && gridSize <= 100)) {
        gridSize = prompt('Enter the number of boxes per side:');
        if (gridSize === null) break;
    }
    for (let i = 0; i < gridSize; i++) {
        const verticalDiv = document.createElement('div');
        verticalDiv.classList.add('vertical-div');
        mainDiv.appendChild(verticalDiv);
        for (let j = 0; j < gridSize; j++) {
            const horizontalDiv = document.createElement('div');
            horizontalDiv.classList.add('horizontal-div');
            verticalDiv.appendChild(horizontalDiv);
        }
    }
    const divs = document.querySelectorAll('.horizontal-div, .vertical-div');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    }));
}

function clearGrid() {
    const divs = document.querySelectorAll('.horizontal-div, .vertical-div');
    divs.forEach(div => {
        div.style.backgroundColor = 'white';
    });
}

function removeGrid() {
    const verticalDivs = document.querySelectorAll('.vertical-div');
    verticalDivs.forEach(vdiv => {
        while(vdiv.firstChild) {
            vdiv.removeChild(vdiv.lastChild);
        }
    });
    while(mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.lastChild);
    }
}