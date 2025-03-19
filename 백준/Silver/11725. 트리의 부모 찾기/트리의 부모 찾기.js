const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());

function solution(arr, n) {
  let temp = [];
  let visited = new Array(n).fill(false);
  let answer = new Array(n).fill('');
  let queue = [0];

  for (let i = 0; i < n; i++) {
    temp.push([]);
  }

  arr.forEach((v) => {
    const [a, b] = v.split(' ').map(Number);
    temp[a - 1].push(b - 1);
    temp[b - 1].push(a - 1);
  });

  while (queue.length > 0) {
    const index = queue.shift();
    visited[index] = true;
    temp[index].forEach((v) => {
      if (!visited[v]) {
        queue.push(v);
        answer[v] = `${index + 1}`;
      }
    });
  }
  return answer.join('\n').trim();
}

console.log(solution(input, N));
