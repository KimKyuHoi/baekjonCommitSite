const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [N, d, k, c] = input[0].split(' ').map(Number);
let sushi = [];
for (let i = 1; i <= N; i++) {
  sushi.push(Number(input[i]));
}

function solution(k, c, arr) {
  const n = arr.length;
  const count = new Map();
  let unique = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    const s = arr[i % n];
    count.set(s, (count.get(s) || 0) + 1);
    if (count.get(s) === 1) unique++;
  }

  max = count.get(c) > 0 ? unique : unique + 1;

  for (let i = 1; i < n; i++) {
    const out = arr[(i - 1) % n];
    const in_ = arr[(i + k - 1) % n];

    count.set(out, count.get(out) - 1);
    if (count.get(out) === 0) unique--;

    // console.log('out', count, 'count', unique);

    count.set(in_, (count.get(in_) || 0) + 1);
    if (count.get(in_) === 1) unique++;

    // console.log('in', count, 'count', unique);

    const total = count.get(c) > 0 ? unique : unique + 1;
    max = Math.max(max, total);
  }

  return max;
}

console.log(solution(k, c, sushi));

