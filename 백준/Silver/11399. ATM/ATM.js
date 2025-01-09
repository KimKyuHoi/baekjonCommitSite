const fs = require("fs");
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



const answer = input
  .split(" ")
  .sort((a, b) => a - b)
  .reduce((acc, cur, i) => acc + cur * (n - i), 0);

console.log(answer);