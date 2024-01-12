'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const styleBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number!!';
  }
  //for wining....
  else if (guess === randomNumber) {
    displayMessage('Correct Number...');
    displayNumber(randomNumber);
    styleBody('#60b347');
    displayNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber ? 'Number is too high..' : 'Number is too low...'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!!!!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  styleBody('#222');
  displayNumberWidth('15rem');
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayNumber('?');
});
