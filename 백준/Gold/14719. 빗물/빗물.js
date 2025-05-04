const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const board = input[1].split(' ').map(Number);

function solution(W, board) {
  let amountWater = 0;

  for (let i = 1; i < W - 1; i++) {
    let maxLeft = Math.max(...board.slice(0, i));
    let maxRight = Math.max(...board.slice(i + 1));
    let basisHeight = Math.min(maxLeft, maxRight);

    // if(board[i]){
    //   amountWater +=
    // }
    if (board[i] < basisHeight) amountWater += basisHeight - board[i];
    // console.log(board[i], i, basisHeight);
  }
  return amountWater;
}

console.log(solution(W, board));
