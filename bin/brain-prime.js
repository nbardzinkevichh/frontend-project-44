#!/usr/bin/env node

import {
  askQuestion,
  getRandomNumber,
  isAnswerCorrect,
  gameFinish,
} from "../src/index.js";

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let correctAnswers = 0;
let i = 0;

const isPrime = (number) => {
  let isPrimeNumber = "yes";
  if (number === 2) {
    return isPrimeNumber;
  }
  let i = 2;
  while (i <= Math.sqrt(number)) {
    if (number % i === 0) {
      isPrimeNumber = "no";
      return isPrimeNumber;
    } else {
      i += 1;
    }
  }
  return isPrimeNumber;
};

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
