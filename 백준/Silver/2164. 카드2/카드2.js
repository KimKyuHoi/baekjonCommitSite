const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

function solution(num) {
  const Q = Array.from({ length: num }, (v, i) => (v = i + 1));
  let idx = 0;

  while (idx !== Q.length - 1) {
    if (idx % 2 === 0) idx++;
    else Q.push(Q[idx++]);
  }

  return Q[idx];
}

console.log(solution(Number(input)));
