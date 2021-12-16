'use strict';
// console.log(document.querySelector('.message'))
// document.querySelector('.message').textContent = "Correct Number 🎉"

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value = 23
// )

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}
const displayScore = (scr) => {
    document.querySelector('.score').textContent = scr;
}
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)
    //  document.querySelector('.message').textContent = "Correct Number 🎉"
    console.log(guess, typeof guess)
    //When there is no imput
    if (!guess) {
        displayMessage('⛔ No Number')
        //When Number is correct
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        displayMessage('🎉 Correct Number')
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        //When Number is too high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ?
                '🚄 Too High!' : '📉 Too Low!')
            score--
            displayScore(score)
        }
        else {
            displayMessage('You Lost The Game!')
            displayScore(0)
        }
    }
})
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    displayScore(score)

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').style.width = '15rem'
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = ''
}
)

