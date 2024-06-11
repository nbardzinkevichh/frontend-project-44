import readlineSync from 'readline-sync';
import askQuestion from './index.js';

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
}

export default greetPlayer;




