#!/usr/bin/env node

import {
  askQuestion, getRandomNumber, isAnswerCorrect, gameFinish,
} from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let correctAnswers = 0;
let i = 0;

const isPrime = (number) => {
  let divisors = 0;
  let j = 0;
  while (j < 10) {
    if (number % j === 0) {
      divisors += 1;
    }
    j += 1;
  }
  return divisors === 1 ? 'yes' : 'no';
};

while (i < 3) {
  const randomNumber = getRandomNumber(200);
  let answer = 0;

  answer = isPrime(randomNumber);
  console.log(answer);
  const question = askQuestion(`Question: ${randomNumber}\nYour answer: `);

  if (!isAnswerCorrect(question, answer)) {
    break;
  } else {
    correctAnswers += 1;
  }

  i += 1;
}

gameFinish(correctAnswers);
