#!/usr/bin/env node

import gcd from 'compute-gcd';
import {
  askQuestion, getRandomNumber, isAnswerCorrect, gameFinish,
} from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');

let correctAnswers = 0;
let i = 0;
while (i < 3) {
  const firstNumber = getRandomNumber(500);
  const secondNumber = getRandomNumber(500);
  const answer = gcd(firstNumber, secondNumber);

  const question = askQuestion(`${firstNumber} ${secondNumber}\nYour answer: `);

  if (!isAnswerCorrect(question, answer.toString())) {
    break;
  } else {
    correctAnswers += 1;
  }

  i += 1;
}

gameFinish(correctAnswers);
