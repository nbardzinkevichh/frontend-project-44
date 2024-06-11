#!/usr/bin/env node
import {
  askQuestion, getRandomNumber, isAnswerCorrect, gameFinish,
} from '../src/index.js';

console.log('What is the result of the expression?');

let correctAnswers = 0;
let i = 0;
while (i < 3) {
  const firstNumber = getRandomNumber(1000);
  const secondNumber = getRandomNumber(1000);
  const signs = ['+', '-', '*'];
  const randomSign = signs[Math.floor(Math.random() * 3)];
  let answer = '';
  if (randomSign === '+') {
    answer = firstNumber + secondNumber;
  } else if (randomSign === '-') {
    answer = firstNumber - secondNumber;
  } else if (randomSign === '*') {
    answer = firstNumber * secondNumber;
  }

  const question = askQuestion(`${firstNumber} ${randomSign} ${secondNumber}\nYour answer: `);

  if (!isAnswerCorrect(question, answer.toString())) {
    break;
  } else {
    correctAnswers += 1;
  }

  i += 1;
}

gameFinish(correctAnswers);
