const startGameButton = document.getElementById('start-game-btn')

const ROCK = 'KAMIEŃ'
const PAPER = 'PAPIER'
const SCISSORS = 'NOŻYCE'
const DEFAULT_USER_CHOICE = PAPER

let isGameRunning = false

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} czy ${SCISSORS}?`, '').toUpperCase()
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert("Błąd. Za karę wybrałem za ciebie papier.")
        return DEFAULT_USER_CHOICE
    }
    return selection
}

startGameButton.addEventListener('click', function() {
    if (isGameRunning) {
        return
    }
    isGameRunning = true
    console.log('Gra się zaczyna!')
    const userSelection = getPlayerChoice()
    console.log(userSelection)
})
