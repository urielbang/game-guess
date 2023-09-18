'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let max = 0;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number !';
    // when player wiins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').innerHTML = guess;
    document.querySelector('.number').style.width = '30rem';
    if (score > max) {
      max = score;
      document.querySelector('.highscore').innerHTML = max;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 20;
  max = 0;
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.number').style.width = '15rem';
});
