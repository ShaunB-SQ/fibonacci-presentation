const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = async (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const askHowManyToPrint = async () => {
  const answer = await ask(
    'How many terms of the Fibonacci sequence would you like to print out?'
  );
  if (isNaN(answer) || Number(answer) < 0) {
    console.log('Please provide a valid positive integer...');
    return askHowManyToPrint();
  }
  return Number(answer);
};

// 0 1 1 2 3 5 8 13 21 34
const fibonacci = (num) => {
  if (num < 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

async function main() {
  const numTerms = await askHowManyToPrint();
  rl.close();
  let i = 0;
  for (const i in [...Array(numTerms).keys()]) {
    console.log(fibonacci(i));
  }
}

main();
