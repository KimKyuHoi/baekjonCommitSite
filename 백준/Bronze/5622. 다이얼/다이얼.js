const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

// const N = input.join('').split('');

function solution(input) {
  const number = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
  };
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    for (let x in number) {
      if (x.includes(input[i])) sum += number[x];
    }
  }

  return sum;
}

console.log(solution(input));
