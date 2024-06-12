#!/usr/bin/env node

import {
  askQuestion, getRandomNumber, isAnswerCorrect, gameFinish,
} from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswers = 0;
let i = 0;
while (i < 3) {
  const randomNumber = getRandomNumber(1000);
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = askQuestion(`Question: ${randomNumber}\n`);

  if (!isAnswerCorrect(question, answer)) {
    break;
  } else {
    correctAnswers += 1;
  }

  i += 1;
}

gameFinish(correctAnswers);