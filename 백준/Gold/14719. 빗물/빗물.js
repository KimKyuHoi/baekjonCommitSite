const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const arr = [...input[1].split(' ').map(Number)];

function solution(H, W, arr) {
  let amountWater = 0;

  for (let i = 1; i < W - 1; i++) {
    let leftMaxHeight = Math.max(...arr.slice(0, i));
    let rightMaxHeight = Math.max(...arr.slice(i + 1));
    let basisHeight = Math.min(leftMaxHeight, rightMaxHeight);

    if (arr[i] < basisHeight) amountWater += basisHeight - arr[i];
  }

  return amountWater;
}

console.log(solution(H, W, arr));
