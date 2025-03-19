const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const board = [];

for (let i = 0; i < N; i++) {
  board.push(input[i].trim().split(' ').map(Number));
}

function solution(board, n) {
  const visited = new Array(n).fill().map(() => new Array(n).fill(false));

  const queue = [[0, 0]];
  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    const jumpSize = board[row][col];

    if (jumpSize === -1) {
      return 'HaruHaru';
    }

    const newCol = col + jumpSize;
    if (newCol < n && !visited[row][newCol]) {
      visited[row][newCol] = true;
      queue.push([row, newCol]);
    }

    const newRow = row + jumpSize;
    if (newRow < n && !visited[newRow][col]) {
      visited[newRow][col] = true;
      queue.push([newRow, col]);
    }
  }

  return 'Hing';
}

console.log(solution(board, N));
