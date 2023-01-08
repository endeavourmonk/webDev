// game constants and variables

let direction = { x: 0, y: 0 };
// const foodSound = new Audio();
// const gameOverSound = new Audio();
// const moveSound = new Audio();
// const musicSound = new Audio();
let lastPaintTime = 0;
let speed = 9;
let snakeArr = [
    { x: 13, y: 15 }
];
let food = { x: 5, y: 10 };
let scoreBox = document.getElementById("scoreBoard");
let score = 0;
let highScoreBox = document.getElementById("highScoreBoard");
let highScore;
let highScoreVal = 0;
let inputDir = { x: 0, y: 0 };

// Setting name on screen from localstorage
let Name = localStorage.getItem("playerName");
if (Name !== null) {
    let playerName = document.getElementById("playerName");
    playerName.innerHTML = Name.substr(1, Name.length - 2);
}

// game functions
function main(currentTime) {
    window.requestAnimationFrame(main);
    // console.log(currentTime);
    if ((currentTime - lastPaintTime) / 1000 < (1 / speed)) {
        return;
    }
    lastPaintTime = currentTime;
    gameEngine();
}

let isCollide = (snake) => {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // If you bump into the wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
    return false;
}

// function to genarate food
let generateFood = () => {
    let a = 2;
    let b = 16;
    food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
}

function generateFoodAndUpdateSnakeAndScores() {
    // if food is eaten
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })
        generateFood();
        score++;
        scoreBox.innerHTML = 'Score: ' + score;
        // updating highscore
        if (score > highScoreVal) {
            highScoreVal = score;
            localStorage.setItem("highScore", JSON.stringify(highScoreVal));
            highScore = localStorage.getItem("highScore");
            highScoreBox.innerHTML = "High Score: " + highScore;
        }
    }
}

// function for displaying the snake
let displaySnake = () => {
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
}

// function for displaying food
let displayFood = () => {
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

// game engine
function gameEngine() {
    if (isCollide(snakeArr)) {
        // gameOverSound.play();
        // musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press any key to continue");
        snakeArr = [{ x: 13, y: 15 }];
        // musicSound.play();
        score = 0;
        scoreBox.innerHTML = 'Score: ' + score;
    }
    generateFoodAndUpdateSnakeAndScores();
    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    displaySnake();
    displayFood();
}
// game logics

// musicSound.play();

// setting highscore in local storage
highScore = localStorage.getItem("highScore");
if (highScore === null) {
    highScoreVal = 0;
    localStorage.setItem("highScore", JSON.stringify(highScoreVal))
} else {
    highScoreVal = JSON.parse(highScore);
    highScoreBox.innerHTML = "High Score: " + highScore;
}

window.requestAnimationFrame(main);
alert("Press any key to start the game.")
window.addEventListener('keydown', key => {
    inputDir = { x: 0, y: 1 };  // start the game
    // moveSound.play();
    switch (key.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})