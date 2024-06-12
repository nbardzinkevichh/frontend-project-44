#!/usr/bin/env node

import {
  askQuestion, getRandomNumber, isAnswerCorrect, gameFinish,
} from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let correctAnswers = 0;
let i = 0;
let j = 1;
let divisors = 0;
while (i < 3) {
  const randomNumber = getRandomNumber(1000);
  let answer = 0;

  while (j <= 5) {
    if (randomNumber % j === 0) {
      divisors += 1;
    }
    j += 1;
  }

  answer = divisors + 1 === 2 ? 'yes' : 'no';

  const question = askQuestion(`Question: ${randomNumber}\n`);

  if (!isAnswerCorrect(question, answer)) {
    break;
  } else {
    correctAnswers += 1;
  }

  i += 1;
}

gameFinish(correctAnswers);
