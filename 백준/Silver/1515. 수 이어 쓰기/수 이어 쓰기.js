const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync(filePath).toString().trim();

const target = input; // 예: "1515"
let idx = 0; // target 문자열에서 현재 매칭할 위치
let answer = 0;

for (let i = 1; ; i++) {
  const str = String(i);
  for (let j = 0; j < str.length; j++) {
    if (str[j] === target[idx]) {
      idx++;
      if (idx === target.length) {
        answer = i;
        break;
      }
    }
  }
  if (answer !== 0) break;
}

console.log(answer);
