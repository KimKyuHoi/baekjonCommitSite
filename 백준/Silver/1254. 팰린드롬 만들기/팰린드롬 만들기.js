const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim();

function isPalindrome(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

function solution(S) {
  const n = S.length;

  for (let i = 0; i < n; i++) {
    if (isPalindrome(S, i, n - 1)) {
      return n + i;
    }
  }
}

console.log(solution(input));
