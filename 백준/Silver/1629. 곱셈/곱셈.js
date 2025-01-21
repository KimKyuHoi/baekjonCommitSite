const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().split('\n');

const [a, b, c] = input[0].split(' ').map((n) => BigInt(n));

let recursive = (pow) => {
  if (pow === 1n) {
    return a % c;
  }

  let newPow = pow / 2n;
  let half = recursive(newPow) % c;

  if (pow % 2n === 0n) {
    return (half * half) % c;
  } else {
    return (half * half * a) % c;
  }
};

console.log(Number(recursive(b)));
