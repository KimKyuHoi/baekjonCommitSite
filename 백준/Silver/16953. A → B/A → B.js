const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [A, B] = input.split(' ').map(Number);
function solution(a, b) {
  const queue = [[a, 1]];

  while (queue.length) {
    const [cur, count] = queue.shift();
    if (cur === b) return count;
    if (cur * 2 <= b) queue.push([cur * 2, count + 1]);
    if (cur * 10 + 1 <= b) queue.push([cur * 10 + 1, count + 1]);
  }

  return -1;
}

console.log(solution(A, B));
