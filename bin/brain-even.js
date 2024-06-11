#!/usr/bin/env node

import greetPlayer from '../src/cli.js';
import gameProcess, { askQuestion } from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = Math.floor(Math.random() * 1000);
const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
const question = askQuestion(`Question: ${randomNumber}\n`);

gameProcess(question, answer);
