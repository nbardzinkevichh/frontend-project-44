import readlineSync from 'readline-sync';
import greetPlayer from './cli.js';

const name = greetPlayer();

const askQuestion = (question) => {
  const userQuestion = readlineSync.question(question);
  return userQuestion;
};

const getRandomNumber = (param) => Math.floor(Math.random() * param);

// const gameProcess = (question, answer) => {
//   let rightAnswers = 0;
//   let i = 0;
//   while (i < 3) {
//     let playerQuestion = askQuestion(question);
//     if (!isAnswerCorrect(playerQuestion, answer)) {
//       break;
//     } else {
//       rightAnswers += 1;
//     }
//     i += 1;
//   }
//   gameFinish();
// }

const isAnswerCorrect = (question, answer) => {
  if (question !== answer) {
    console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
    return 0;
  }
  console.log('Correct');
  return 1;
};

const gameFinish = (correctAnswers) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export {
  askQuestion, getRandomNumber, isAnswerCorrect, gameFinish,
};

// , gameProcess as default
