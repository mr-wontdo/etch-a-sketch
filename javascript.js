const mainDiv = document.querySelector('.main-div');

createGrid();

const divs = document.querySelectorAll('.horizontal-div, .vertical-div');
divs.forEach(div => div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
}));

function createGrid() {
    let gridSize = prompt('Enter the number of boxes per side:');
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
}