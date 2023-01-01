// game constants and variables

let direction = { x: 0, y: 0 };
// const foodSound = new Audio();
// const gameOverSound = new Audio();
// const moveSound = new Audio();
// const musicSound = new Audio();
let lastPaintTime = 0;
let speed = 2;
let snakeArr = [
    { x: 13, y: 15 }
];
let food = { x: 5, y: 10 };

// game functions

function main(currentTime) {
    window.requestAnimationFrame(main);
    console.log(currentTime);
    if ((currentTime - lastPaintTime) / 1000 < (1 / speed)) {
        return;
    }
    lastPaintTime = currentTime;
    gameEngine();
}


let gameEngine = () => {
    // updating snake and food

    // displaying the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })

    // displaying the food

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

// game logics
window.requestAnimationFrame(main);