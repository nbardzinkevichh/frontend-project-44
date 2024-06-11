#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetPlayer, { askQuestion, gameProcess } from '../src/index.js';

greetPlayer();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randomNumber = Math.floor(Math.random() * 1000);
const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
const question = askQuestion(`Question: ${randomNumber}\n`);

gameProcess(question, answer);
