const mainDiv = document.querySelector('.main-div');
const resetGridButton = document.querySelector('.reset-grid');

resetGridButton.addEventListener('click', () => {
    createGrid();
});

function createGrid() {
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