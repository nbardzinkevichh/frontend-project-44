#!/usr/bin/env node

import {
  askQuestion, getRandomNumber, isAnswerCorrect, gameFinish,
} from '../src/index.js';

import gcd from 'compute-gcd';

console.log('Find the greatest common divisor of given numbers.')

let correctAnswers = 0;
let i = 0;
while (i < 3) {
  const firstNumber = getRandomNumber(500);
  const secondNumber = getRandomNumber(500);
  let answer = gcd(firstNumber, secondNumber);

  console.log(answer);
  const question = askQuestion(`${firstNumber} ${secondNumber}\nYour answer: `);

  if (!isAnswerCorrect(question, answer.toString())) {
    break;
  } else {
    correctAnswers += 1;
  }

  i += 1;
}

gameFinish(correctAnswers);