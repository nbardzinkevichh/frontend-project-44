#!/usr/bin/env node

import {
  askQuestion,
  getRandomNumber,
  isAnswerCorrect,
  gameFinish,
} from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  let isPrimeNumber = 'yes';
  if (number === 2) {
    return isPrimeNumber;
  }
  let j = 2;
  while (j <= Math.sqrt(number)) {
    if (number % j === 0) {
      isPrimeNumber = 'no';
      return isPrimeNumber;
    }
    j += 1;
  }
  return isPrimeNumber;
};

let correctAnswers = 0;
let i = 0;
while (i < 3) {
  const randomNumber = getRandomNumber(200);
  let answer = 0;

  answer = isPrime(randomNumber);
  const question = askQuestion(`Question: ${randomNumber}\nYour answer: `);

  if (!isAnswerCorrect(question, answer)) {
    break;
  } else {
    correctAnswers += 1;
  }

  i += 1;
}

gameFinish(correctAnswers);
