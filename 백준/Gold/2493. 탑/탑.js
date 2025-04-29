const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const towers = input[1].split(' ').map(Number);
let answer = [];
const stack = [];

for (let i = 0; i < N; i++) {
  const currentTower = {
    index: i + 1,
    height: Number(towers[i]),
  };

  if (!stack.length) {
    stack.push(currentTower);
    answer.push(0);
    continue;
  }

  if (stack[stack.length - 1].height < currentTower.height) {
    while (stack.length) {
      if (stack[stack.length - 1].height > currentTower.height) {
        break;
      } else {
        stack.pop();
      }
    }

    !stack.length ? answer.push(0) : answer.push(stack[stack.length - 1].index);
    stack.push(currentTower);
  } else {
    answer.push(stack[stack.length - 1].index);
    stack.push(currentTower);
  }
}

console.log(answer.join(' '));
