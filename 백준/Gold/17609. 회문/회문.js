const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const strings = input.slice(1);

function solution(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      const skipLeft = isPalindrome(s, left + 1, right);
      const skipRight = isPalindrome(s, left, right - 1);
      return skipLeft || skipRight ? 1 : 2;
    }
  }
  return 0;
}

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

strings.forEach((str) => {
  console.log(solution(str));
});
