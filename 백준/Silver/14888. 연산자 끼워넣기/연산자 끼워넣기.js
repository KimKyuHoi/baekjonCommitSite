const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = input.shift(Number);
const num_arr = input.shift().split(' ').map(Number);
const math = input.shift().split(' ').map(Number);

const calculate = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b),
];

let max = -1000000000;
let min = 1000000000;

const dfs = (count = 0, result = num_arr[0]) => {
  if (count === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  } else {
    for (let i = 0; i < 4; i++) {
      if (!math[i]) {
        continue;
      }
      math[i]--;
      dfs(count + 1, calculate[i](result, num_arr[count + 1]));
      math[i]++;
    }
  }
};

dfs();
console.log(max);
console.log(min);
