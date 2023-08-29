'use strict';

const secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess, guess);
  let max = 0;
  if (!guess) {
    document.querySelector('.message').textContent = 'No number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number!';
    document.body.style.backgroundColor = 'green';
    if (score > max) {
      max = score;
    }
    document.querySelector('.highscore').textContent = max;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
