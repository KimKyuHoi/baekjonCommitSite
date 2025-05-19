const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const board = input.map((v) => v.split('').map(Number));

function isUniform(x, y, size) {
  const first = board[y][x];
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (board[i][j] !== first) return false;
    }
  }
  return true;
}

function compress(x, y, size) {
  if (isUniform(x, y, size)) return board[y][x];

  const half = size >> 1;
  const topLeft = compress(x, y, half);
  const topRight = compress(x + half, y, half);
  const bottomLeft = compress(x, y + half, half);
  const bottomRight = compress(x + half, y + half, half);

  return '(' + topLeft + topRight + bottomLeft + bottomRight + ')';
}

console.log(compress(0, 0, N));
