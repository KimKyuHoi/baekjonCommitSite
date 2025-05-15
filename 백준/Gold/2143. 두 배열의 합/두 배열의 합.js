const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const n = Number(input[1]);
const arr = input[2].split(' ').map(Number);
const m = Number(input[3]);
const arr2 = input[4].split(' ').map(Number);

function getPartialSums(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    let sum = 0;
    for (let j = i; j < items.length; j++) {
      sum += items[j];
      result.push(sum);
    }
  }
  return result;
}

const sumA = getPartialSums(arr);
const sumB = getPartialSums(arr2);

const sumBMap = new Map();
for (const b of sumB) {
  sumBMap.set(b, (sumBMap.get(b) || 0) + 1);
}

let cnt = 0;

for (const a of sumA) {
  const target = T - a;
  if (sumBMap.has(target)) {
    cnt += sumBMap.get(target);
  }
}

console.log(cnt);
