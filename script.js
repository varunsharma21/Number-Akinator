'use strict';
/*
document.querySelector('.message').textContent = 'correct number!';

console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 99;
document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value = 656;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        displayMessage('No number OR number is 0...');
    }

    // If you win game
    else if(guess === secretNumber) {
        displayMessage('Wow, Correct number!!!')
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Too high...' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

    // // Number greater than secret number.
    // else if(secretNumber < guess) {
    //     document.querySelector('.message').textContent = 'Too high...';
    //     if(score > 0){
    //     score--;
    //     }
    //     document.querySelector('.score').textContent = score;
    //     if(score === 0) {
    //         document.querySelector('.message').textContent = 'BOO...BOO...YOU LOOSE... ';
    //     }
    // }

    // // Number less than secret number.
    // else if(secretNumber > guess) {
    //     document.querySelector('.message').textContent = 'Too low...';
    //     if(score > 0){
    //         score--;
    //         }
    //     document.querySelector('.score').textContent = score;
    //     if(score === 0) {
    //         document.querySelector('.message').textContent = 'BOO...BOO...YOU LOOSE... ';
    //     }
    // }
});

// //AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function() {
    
    score = 10;    
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});