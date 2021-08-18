
let player1Score = 0
let player2Score = 0
let player1Turn = true
let player1TurnCount = 0
let player2TurnCount = 0

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1TurnCount +=1
        player1Turn = false
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2TurnCount +=1
        player1Turn = true
    }
    
    if (player1Score >= 20 && player1TurnCount === player2TurnCount && player1Score > player2Score) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20  && player1TurnCount === player2TurnCount && player1Score < player2Score) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
        player2Dice.classList.add("active")
        player1Dice.classList.remove("active")
    }  else if(player2Score >= 20 && player1Score >= 20 && player1TurnCount === player2TurnCount && player1Score === player2Score){
        message.textContent = "It's a tie"
        showResetButton()
        player2Dice.classList.add("active")
        player1Dice.classList.add("active")
    }


   
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
