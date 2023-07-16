const mainDiv = document.querySelector('.main-div');

const resetGridButton = document.querySelector('.create-grid');
resetGridButton.addEventListener('click', () => {
    createGrid();
});

const clearGridButton = document.querySelector('.clear-grid');
clearGridButton.addEventListener('click', () => {
    clearGrid();
});

const blackColorButton = document.querySelector('.black-color');
blackColorButton.addEventListener('click', () => {
    const divs = document.querySelectorAll('.horizontal-div, .vertical-div');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    }));
});

const rainbowColorButton = document.querySelector('.rainbow-color');
rainbowColorButton.addEventListener('click', () => {
    const divs = document.querySelectorAll('.horizontal-div, .vertical-div');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = getRandomColor();
    }));
});

function createGrid() {
    removeGrid();
    let gridSize = 0;
    while (!(gridSize > 0 && gridSize <= 100)) {
        gridSize = prompt('Enter a number between 1 and 100 to set the size of the grid:');
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
        div.style.backgroundColor = '#EADAB7';
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

function getRandomColor() {
    let colors = ['#CC99C9', '#9EC1CF', '#9EE09E', '#FDFD97', '#FEB144', '#FF6663'];
    let randomNumber = Math.floor(Math.random() * 6);
    return colors[randomNumber];
}