import gameProcess, { askQuestion } from '../src/index.js';

console.log('What is the result of the expression?');

let firstNumber = Math.floor(Math.random() * 1000);
let secondNumber = Math.floor(Math.random() * 1000);
const signs = ['+', '-', '*'];
const randomSign = signs[Math.floor(Math.random() * 3)];
let answer = '';

if (randomSign === '+') {
  answer = firstNumber  + secondNumber;
} else if (randomSign === '-') {
  answer = firstNumber - secondNumber;
} else if (randomSign === '*') {
  answer = firstNumber * secondNumber;
}

console.log(firstNumber, secondNumber, randomSign);

console.log(answer.toString());

const question = askQuestion(`${firstNumber} ${randomSign} ${secondNumber}\nYour answer: `);
gameProcess(question, answer.toString());