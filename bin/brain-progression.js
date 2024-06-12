#!/usr/bin/env node

import {
  askQuestion, getRandomNumber, isAnswerCorrect, gameFinish,
} from '../src/index.js';

console.log('What number is missing in the progression?');

const getProgression = (randomStep) => {
  const progression = [];

  for (let i = 0; i < 110; i += randomStep) {
    progression.push(i);
    if (progression.length === 10) break;
  }

  const answer = progression[getRandomNumber(10)];
  const modifiedProgression = progression.join(' ').replace(answer, '..').split(' ');

  return [modifiedProgression, answer];
};

let correctAnswers = 0;
let i = 0;
while (i < 3) {
  let randomStep = getRandomNumber(10);
  randomStep = getRandomNumber(2) === 0 ? -randomStep : randomStep;
  const [progression, answer] = getProgression(randomStep);
  console.log('Question: ', ...progression);
  const question = askQuestion('Your answer:\n');

  if (!isAnswerCorrect(question, answer.toString())) {
    break;
  } else {
    correctAnswers += 1;
  }

  i += 1;
}

gameFinish(correctAnswers);
