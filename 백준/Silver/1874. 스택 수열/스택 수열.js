const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((item) => Number(item));

const iter = input.shift();

let answer = [];

let stack = [];
let stackNum = 1;

for (let i = 0; i < iter; i++) {
  let num = input[i];

  while (stackNum <= num) {
    stack.push(stackNum);
    stackNum++;
    answer.push('+');
  }

  let stackPop = stack.pop();
  answer.push('-');

  if (stackPop !== num) {
    console.log('NO');
    return;
  }
}

console.log(answer.join('\n'));
