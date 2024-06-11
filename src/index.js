import readlineSync from 'readline-sync';
import greetPlayer from './cli.js';

const name = greetPlayer();

const askQuestion = (question) => {
  const userQuestion = readlineSync.question(question);
  return userQuestion;
}

const gameProcess = (question, answer) => {
  let rightAnswers = 0;
  let i = 0;
  while (i < 3) {
    const userQuestion = askQuestion(question);
    if (!isAnswerCorrect(userQuestion, answer)) {
      break;
    } else {
      rightAnswers += 1;
    }
    i += 1;
  }
  gameFinish();
}

const isAnswerCorrect = (question, answer) => {
  if (question !== answer) {
    console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return 0;
  } else {
    console.log('Correct');
    return 1;
  }
}

const gameFinish = (rightAnswers) => {
  if (rightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export {askQuestion, gameProcess, greetPlayer as default};