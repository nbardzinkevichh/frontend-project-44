#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;
let rightAnswers = 0;
while (i < 3) {
  const randomNumber = Math.floor(Math.random() * 1000);
  const question = readlineSync.question(`Question: ${randomNumber}\n`);

  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
  if (question !== answer) {
    console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.`);
    break;
  } else {
    console.log('Correct');
  }
  i += 1;
  rightAnswers += 1;
}

if (rightAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
