'use strict';

const randomNumber = (document.querySelector('.number').textContent =
  Math.trunc(Math.random() * 20) + 1);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number!!';
  }
  //for wining....
  else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number...';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('number').style.width = '30rem';
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too high..';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost the game!!!!';
    }
  }
  // for lose
  else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too low...';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost the game!!!!';
    }
  }

  console.log(guess);
});
