const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);

function isPrime(n) {
  if (n < 2) return false;
  const sqrt = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(N) {
  const primeArr = [];

  for (let i = 1; i <= N; i++) {
    if (isPrime(i)) primeArr.push(i);
  }

  let cnt = 0;
  let sum = 0;
  let left = 0,
    right = 0;
  while (right < primeArr.length) {
    sum += primeArr[right];

    while (sum > N) {
      sum -= primeArr[left];
      left++;
    }

    if (sum === N) cnt++;

    right++;
  }

  return cnt;
}

console.log(solution(N));
