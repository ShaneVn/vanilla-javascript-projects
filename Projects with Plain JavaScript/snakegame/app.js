const grid = document.querySelector(".grid");
const button = document.querySelector("#start");
const scoreDisplay = document.querySelector("#score");
const titleMsg = document.getElementById("title");
const width = 10;
let currentSnake = [2, 1, 0];
let squares = [];
let appleIndex = 7;
let direction = 1;
let score = 0;
let intervalTime = 1000;
let speed = 0.8;
let timeId = 0;

function createGrid() {
  //  create 100 div using for loop
  for (i = 0; i < 100; i++) {
    // Create the div
    const square = document.createElement("div");
    // add the class square to all the 100 div
    square.classList.add("square");
    // add the 100 div inside the div with class grid
    grid.appendChild(square);
    // put the 100 div inside in an array called sqaures
    squares.push(square);
  }
}

createGrid();

currentSnake.forEach((index) => squares[index].classList.add("snake"));

function startGame() {

  titleMsg.textContent = "Welcome to Snake Game"
  // Remove snake
  currentSnake.forEach((index) => squares[index].classList.remove("snake"));
  // Remove apple
  squares[appleIndex].classList.remove("apple");

  squares[7].classList.add("apple");

  clearInterval(timeId);
  currentSnake = [2, 1, 0];
  direction = 1;
  score = 0;
  scoreDisplay.textContent = score;
  intervalTime = 1000;
  // readd the class of snake to our new currentSnake
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
  timeId = setInterval(move, intervalTime);
}

button.addEventListener("click", startGame);

function move() {
  if (
    (currentSnake[0] + width >= 100 && direction === 10) ||
    (currentSnake[0] % width === 9 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] < width && direction === -10) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    titleMsg.textContent = "Game Over, please try again";
    clearInterval(timeId);
  } else {
    const tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);

    //Deal with Snake head getting the apple

    if (squares[currentSnake[0]].classList.contains("apple")) {
      // Remove class apple

      squares[currentSnake[0]].classList.remove("apple");

      // Snak grows larger

      squares[tail].classList.add("snake");
      currentSnake.push(tail);
      //generate a new apple

      generateApples();

      //add one to the score
      score++;
      scoreDisplay.textContent = score;
      //speed up snake

      clearInterval(timeId);
      intervalTime *= speed;
      timeId = setInterval(move, intervalTime);
    }

    squares[currentSnake[0]].classList.add("snake");
  }
}

// move();

function generateApples() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  squares[appleIndex].classList.add("apple");
}

function control(e) {
  if (e.code === "ArrowRight" && direction != -1) {
    direction = 1;
  } else if (e.code === "ArrowUp" && direction != width) {
    direction = -width;
  } else if (e.code === "ArrowLeft" && direction != 1) {
    direction = -1;
  } else if (e.code === "ArrowDown" && direction != -width) {
    direction = width;
  }
}

document.addEventListener("keydown", control);
