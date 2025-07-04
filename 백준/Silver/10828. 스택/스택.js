const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i]);
}

// console.log(arr[0].split(' '));
let stack = [];
let ans = [];

for (let i = 0; i < arr.length; i++) {
  switch (arr[i]) {
    case 'pop':
      if (stack.length > 0) {
        ans.push(stack[stack.length - 1]);
        stack.pop();
      } else {
        ans.push(-1);
      }
      break;
    case 'top':
      if (stack.length > 0) {
        ans.push(stack[stack.length - 1]);
      } else {
        ans.push(-1);
      }
      break;
    case 'size':
      ans.push(stack.length);
      break;
    case 'empty':
      if (stack.length > 0) ans.push(0);
      else ans.push(1);
      break;
    default:
      const [query, x] = arr[i].split(' ');
      stack.push(Number(x));
      // console.log(stack);
      break;
  }
}

// console.log(stack);

ans.forEach((a) => console.log(a));
